import React from "react";
import { Card, CardContent } from "./ui/card";
import { BarChart3, Target, Shield, TrendingUp, Calculator, FileText, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import WhatsAppButton from "./ui/whatsapp-button";

export default function ServicesSection() {
  const mainServices = [
    {
      icon: BarChart3,
      title: "Controladoria Financeira Completa",
      description: "Estruturação de processos financeiros com foco em controle de custos, margem de contribuição e análise de rentabilidade por produto/cliente.",
      features: ["Controle de custos", "Análise de margens", "Gestão Financeira Estratégica"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Planejamento & Orçamento",
      description: "Desenvolvimento de orçamentos anuais, planejamento estratégico financeiro e acompanhamento de metas com indicadores de performance.",
      features: ["Orçamento anual", "Centro de Resultados", "Previsibilidade"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Gestão de Riscos Financeiros",
      description: "Identificação e mitigação de riscos financeiros, controle de fluxo de caixa e estruturação de reservas para crescimento sustentável.",
      features: ["Análise de riscos", "Fluxo de caixa otimizado", "Controle de Capital de Giro (NCG)"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const additionalServices = [
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Dashboards executivos e relatórios gerenciais personalizados"
    },
    {
      icon: Calculator,
      title: "Análise de Margens",
      description: "Estudo de rentabilidade e lucratividade"
    },
    {
      icon: FileText,
      title: "Planejamento Financeiro",
      description: "Projeção de cenários e controle de risco"
    },
    {
      icon: Users,
      title: "Treinamento de Equipes",
      description: "Capacitação, Procedimentos e Auditoria interna"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6">
            <Zap size={16} />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Controladoria que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              transforma
            </span>{" "}
            resultados
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Soluções especializadas para empresas que precisam de clareza financeira 
            para sustentar o crescimento sem comprometer a rentabilidade
          </p>
        </div>

        {/* Serviços Principais */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Serviços Adicionais */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-8 lg:p-12 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Método + Inteligência em Gestão</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group hover:bg-gray-800/30 p-6 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para transformar sua gestão financeira?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com segurança financeira.
            </p>
            <WhatsAppButton 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8"
            >
              Quero uma consultoria
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}