import React from "react";

export default function ResultsSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que comprovam nossa eficiência
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Números reais de empresas que transformaram sua gestão financeira
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 - Empresas atendidas */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">+500</div>
            <div className="text-white font-semibold text-lg mb-2">Empresas atendidas</div>
            <div className="text-gray-400 text-sm">Indústrias e distribuidoras em todo Brasil</div>
          </div>

          {/* Card 2 - Faturamento analisado */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">R$ 5bi</div>
            <div className="text-white font-semibold text-lg mb-2">Em faturamento analisado</div>
            <div className="text-gray-400 text-sm">Dados processados e otimizados</div>
          </div>

          {/* Card 3 - Aumento médio de lucro */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">+20%</div>
            <div className="text-white font-semibold text-lg mb-2">Aumento médio de lucro</div>
            <div className="text-gray-400 text-sm">Resultado após 6 meses de trabalho</div>
          </div>

          {/* Card 4 - Taxa de satisfação */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">+ 85%</div>
            <div className="text-white font-semibold text-lg mb-2">Taxa de satisfação</div>
            <div className="text-gray-400 text-sm">Clientes que recomendam nossos serviços</div>
          </div>
        </div>
      </div>
    </section>
  );
}