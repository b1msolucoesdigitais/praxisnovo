import React, { useState, useEffect, useRef } from "react";

const dashboardImages = [
  "dashpraxis.webp",
  "dashpraxis2.png",
  "dashpraxis3.png",
  "dashpraxis4.png",
  "dashpraxis5.png"
];

export default function DashboardSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % dashboardImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length);

  // Autoplay
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % dashboardImages.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Pausar autoplay ao interagir
  const handleManual = (action: () => void) => {
    setPaused(true);
    action();
    setTimeout(() => setPaused(false), 10000); // retoma autoplay após 10s
  };

  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6">
            Dashboard em tempo real
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Acesso rápido e claro a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">todas as informações</span> do seu negócio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tenha uma visão completa e atualizada do desempenho da sua empresa, com dashboards interativos que facilitam a análise e aceleram a tomada de decisão. Tudo em tempo real, de forma visual e intuitiva.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[90vw] md:max-w-[50vw] max-w-[600px] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black flex items-center justify-center">
            <img
              src={dashboardImages[current]}
              alt={`Dashboard ${current + 1}`}
              className="w-full h-full object-contain transition-all duration-700"
              draggable={false}
            />
            {/* Controles do carrossel */}
            <button
              onClick={() => handleManual(prevSlide)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-blue-600/80 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Anterior"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={() => handleManual(nextSlide)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-blue-600/80 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Próximo"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          {/* Dots reposicionados abaixo da imagem */}
          <div className="flex gap-2 mt-6">
            {dashboardImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManual(() => setCurrent(idx))}
                className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-white border-blue-400' : 'bg-gray-200 border-gray-400'} transition-all`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 