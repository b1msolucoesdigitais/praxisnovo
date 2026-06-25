import React from "react";
import { Card, CardContent } from "./ui/card";
import { Search, Settings, BarChart, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico Inicial",
      description: "Análise completa da situação financeira atual da empresa",
      details: [
        "Auditoria dos processos financeiros existentes",
        "Identificação de gaps e oportunidades",
        "Mapeamento de fluxos de informação"
      ],
      duration: "2-3 semanas"
    },
    {
      number: "02",
      icon: Settings,
      title: "Estruturação",
      description: "Implementação de controles e processos personalizados",
      details: [
        "Definição de centros de custo",
        "Criação de indicadores de performance",
        "Estruturação de relatórios gerenciais",
        "Treinamento da equipe interna"
      ],
      duration: "4-6 semanas"
    },
    {
      number: "03",
      icon: BarChart,
      title: "Monitoramento",
      description: "Acompanhamento contínuo com relatórios mensais",
      details: [
        "Dashboards executivos personalizados",
        "Reuniões mensais de análise",
        "Ajustes e otimizações contínuas"
      ],
      duration: "Contínuo"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Resultados",
      description: "Crescimento sustentável com controle inteligente",
      details: [
        "Aumento da margem de lucro",
        "Redução de custos operacionais",
        "Tomada de decisões assertivas"
      ],
      duration: "3-6 meses"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
            <Settings size={16} />
            Nossa Metodologia
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              transformamos
            </span>{" "}
            sua empresa
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Método e processo estruturado, comprovado para implementar controladoria financeira 
            que gera resultados consistentes e sustentáveis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0"></div>
              )}
              
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 group backdrop-blur-sm relative z-10 h-full">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 opacity-20">
                      {step.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium bg-gray-800/50 px-3 py-1 rounded-full">
                      {step.duration}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                        <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Resultados comprovados em mais de 500 empresas
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa metodologia já transformou a gestão financeira de empresas em todo o Brasil, 
              gerando crescimento sustentável e aumento médio de 20% na margem de lucro.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  + 85%
                </div>
                <div className="text-sm text-gray-400">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  6 meses
                </div>
                <div className="text-sm text-gray-400">ROI médio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Até 12 meses
                </div>
                <div className="text-sm text-gray-400">Assessoria e Planejamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}