import React from "react";
import { Button } from "./ui/button";
import { TrendingUp, Shield, FileText, Calculator, ArrowRight, CheckCircle } from "lucide-react";
import ContactModal from "./contact-modal";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mt-8 sm:mt-0">
                <CheckCircle size={16} />
                Especialistas em Controladoria Financeira
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transforme seus{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  números
                </span>{" "}
                em estratégia
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Controladoria financeira especializada para empresas em crescimento. 
                <span className="text-emerald-400 font-semibold"> Clareza nos números, controle sobre o crescimento.</span>
              </p>
            </div>

            <div>
              <ContactModal>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-emerald-500/25 group"
                >
                  Quero uma consultoria
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </ContactModal>
            </div>

            {/* Indicadores com melhor design */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:scale-110 transition-transform">
                  +500
                </div>
                <div className="text-sm text-gray-400 font-medium">Empresas transformadas</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:scale-110 transition-transform">
                  R$5bi+
                </div>
                <div className="text-sm text-gray-400 font-medium">Em faturamento analisado</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:scale-110 transition-transform">
                  35%
                </div>
                <div className="text-sm text-gray-400 font-medium">Aumento médio de lucro</div>
              </div>
            </div>
          </div>

          {/* Elemento Visual Melhorado */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-8 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Nossa Metodologia</h3>
                  <p className="text-gray-400">Processos estruturados para resultados consistentes</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Calculator className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">Diagnóstico Financeiro</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Análise completa da situação atual com identificação de oportunidades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">Implementação de Controles</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Estruturação de processos e indicadores personalizados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">Monitoramento Contínuo</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Acompanhamento mensal com relatórios executivos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">Relatórios Estratégicos</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Dashboards executivos para tomada de decisão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}