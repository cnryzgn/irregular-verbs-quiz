# 1. Aşama: Bağımlılıkları yükle
FROM node:20-alpine AS deps
WORKDIR /app

# Sadece paket dosyalarını kopyala (Cache avantajı için)
COPY package.json package-lock.json* ./
RUN npm install

# 2. Aşama: Geliştirme (Development) ortamı
FROM node:20-alpine AS runner
WORKDIR /app

# Bağımlılıkları ve tüm proje dosyalarını kopyala
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js telemetrisini kapatmak isterseniz (Opsiyonel)
# ENV NEXT_TELEMETRY_DISABLED 1

# Portu dışarı aç
EXPOSE 3000

# Geliştirme modunda çalıştır
CMD ["npm", "run", "dev"]