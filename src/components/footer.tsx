import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import ContactModal from "./contact-modal";

export default function Footer() {
  return (
    <footer id="contato" className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da empresa */}
          <div className="space-y-4">
            <img
              src="logo.webp"
              alt="PRAXIS - Gestão Inteligente"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
              loading="eager"
              style={{ objectFit: 'contain' }}
            />
            <p className="text-gray-400 leading-relaxed">
              Controladoria financeira especializada em empresas em crescimento. 
              Transformamos dados em decisões estratégicas.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/praxisgestaointeligente/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/sejapraxis" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/sejapraxis" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@praxisgestaointeligente8514" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Controladoria Financeira</span></li>
              <li><span className="text-gray-400">Indicadores de Performance</span></li>
              <li><span className="text-gray-400">Planejamento Estratégico</span></li>
              <li><span className="text-gray-400">Análise de Custos</span></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Fale Conosco</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400" />
                <a href="tel:+5531997150237" className="text-gray-400 hover:text-white transition-colors">
                  (31) 99715-0237
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400" />
                <a href="mailto:contato@sejapraxis.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@sejapraxis.com.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div className="mb-1">
                    <strong>Ipatinga:</strong><br />
                    Rua Caviúna, 215 - Horto
                  </div>
                  <div>
                    <strong>Belo Horizonte:</strong><br />
                    Rua Eduardo Porto, 145 - Cidade Jardim
                  </div>
                </div>
              </div>
            </div>
            <ContactModal>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full block text-center py-3 rounded-lg font-semibold transition-colors mt-4">
                Solicitar Contato
              </button>
            </ContactModal>
          </div>
        </div>

        {/* Linha divisória e informações legais */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 PRAXIS Controladoria. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              CNPJ: 31.386.660/0001-86
            </div>
            <div className="text-gray-400 text-sm">
              Criado por{" "}
              <a 
                href="https://b1m.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                B1M
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}