import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-black text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empresários que transformaram sua gestão financeira com a PRAXIS
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "Antes, eu olhava só o extrato bancário. Hoje sei exatamente onde cada real está sendo investido e qual o retorno real de cada área."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                CM
              </div>
              <div>
                <div className="font-semibold text-white">Carlos Mendes</div>
                <div className="text-gray-400 text-sm">CEO</div>
                <div className="text-emerald-400 text-sm font-medium">Indústria MetalTech</div>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "A PRAXIS nos ajudou a identificar R$ 2,3 milhões em custos desnecessários. Nosso lucro aumentou 35% em 8 meses."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                APS
              </div>
              <div>
                <div className="font-semibold text-white">Ana Paula Silva</div>
                <div className="text-gray-400 text-sm">Diretora Financeira</div>
                <div className="text-emerald-400 text-sm font-medium">Distribuidora LogiMax</div>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "Finalmente conseguimos crescer sem medo. Os indicadores nos dão segurança para tomar decisões estratégicas importantes."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                RO
              </div>
              <div>
                <div className="font-semibold text-white">Roberto Oliveira</div>
                <div className="text-gray-400 text-sm">Sócio-Fundador</div>
                <div className="text-emerald-400 text-sm font-medium">TechSolutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}