import React from "react";
import WhatsAppButton from "./ui/whatsapp-button";
import { Button } from "./ui/button";

export default function VideoSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja como entregamos clareza para sua gestão
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça nossa metodologia e entenda como podemos transformar a gestão financeira da sua empresa
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Player de Vídeo */}
          <div className="w-full max-w-4xl mb-12">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Vídeo Container */}
              <div className="relative aspect-video bg-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EtpXOmEooh8"
                  title="Controladoria Financeira - Praxis - Gestão Financeira Inteligente"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Botão de Consultoria */}
          <WhatsAppButton className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
            Quero uma consultoria
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}