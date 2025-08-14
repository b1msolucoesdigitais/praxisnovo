import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ContactModal from "./contact-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
          <a href="#home"> <img
              src="logo.webp"
              alt="PRAXIS - Gestão Inteligente"
              width={150}
              height={50}
              className="h-10 w-auto"
              loading="eager"
              style={{ objectFit: 'contain' }}
            /></a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
              Depoimentos
            </a>
            <ContactModal>
              <button type="button" className="text-gray-300 hover:text-white transition-colors focus:outline-none">
                Contato
              </button>
            </ContactModal>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ContactModal>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6">
                Quero uma consultoria
              </Button>
            </ContactModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                Como Funciona
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
              <ContactModal>
                <button type="button" className="text-gray-300 hover:text-white transition-colors text-left w-full focus:outline-none">
                  Contato
                </button>
              </ContactModal>
              <ContactModal>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold w-full mt-4">
                  Quero uma consultoria
                </Button>
              </ContactModal>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}