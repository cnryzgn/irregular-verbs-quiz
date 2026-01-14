import React from 'react';

const QuizLoader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden">
            {/* Arka Plan Efekti - Quiz temasına uygun soft ışıklar */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-600/10 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="relative flex flex-col items-center gap-10 px-6 text-center">
                {/* Yükleme Animasyonu (İç içe dönen halkalar) */}
                <div className="relative group">
                    {/* Dış Halka */}
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white/5 border-t-indigo-500 animate-spin" />
                    
                    {/* Orta Halka (Ters yöne) */}
                    <div className="absolute top-2 left-2 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white/5 border-b-slate-400 animate-[spin_2s_linear_infinite_reverse]" />
                    
                    {/* En İçteki Nokta */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_20px_rgba(129,140,248,0.6)]" />
                </div>

                {/* Metin Bloğu */}
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl md:text-3xl font-black tracking-[0.4em] uppercase bg-gradient-to-r from-indigo-400 via-white to-slate-400 bg-clip-text text-transparent animate-pulse">
                        Loading
                    </h2>
                    
                    <div className="flex items-center gap-2">
                         <span className="text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em]">
                            Mastering Irregular Verbs
                        </span>
                    </div>
                </div>

                {/* Modern İlerleme Çubuğu */}
                <div className="w-40 md:w-56 h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full animate-[shimmer_2s_infinite]" />
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
};

export default QuizLoader;