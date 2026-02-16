# ========================================
# AŞAMA 1: Bağımlılıkları Yükle
# ========================================
FROM node:20-alpine AS deps
WORKDIR /app

# Sadece paket dosyalarını kopyala (Docker cache avantajı)
COPY package.json package-lock.json* ./

# Bağımlılıkları yükle
RUN npm ci

# ========================================
# AŞAMA 2: Projeyi Build Et (Static Export)
# ========================================
FROM node:20-alpine AS builder
WORKDIR /app

# Bağımlılıkları önceki aşamadan kopyala
COPY --from=deps /app/node_modules ./node_modules

# Tüm proje dosyalarını kopyala
COPY . .

# Next.js telemetrisini kapat
ENV NEXT_TELEMETRY_DISABLED 1

# Production build yap (Static export yapacak)
RUN npm run build

# ========================================
# AŞAMA 3: Statik Dosyaları Serve Et (Nginx)
# ========================================
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Builder aşamasından statik dosyaları kopyala
COPY --from=builder /app/out .

# Nginx konfigürasyonu (SPA için)
RUN echo 'server {\
  listen 3000;\
  server_name _;\
  root /usr/share/nginx/html;\
  index index.html;\
  location / {\
    try_files $uri $uri/ /index.html;\
  }\
}' > /etc/nginx/conf.d/default.conf

# Port tanımı
EXPOSE 3000

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]