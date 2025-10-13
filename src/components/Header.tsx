import { useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Menu Mobile simplificado para o perfil do site
  const MobileMenu = () => (
    <div className="lg:hidden">
      {/* Backdrop branco com blur */}
      <div 
        className="fixed inset-0 bg-white/80 backdrop-blur-sm"
        style={{ zIndex: 9999 }}
        onClick={closeMenu}
      ></div>
      {/* Sidebar */}
      <div 
        className="fixed top-0 right-0 w-64 max-w-full h-full bg-white shadow-2xl"
        style={{ zIndex: 10000 }}
      >
        <div className="flex flex-col p-6 space-y-6 h-full">
          {/* Fechar */}
          <div className="flex items-center justify-end">
            <button
              onClick={closeMenu}
              className="text-gray-900 hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* Navigation Links (ajuste conforme as seções do seu site) */}
          <nav className="flex flex-col space-y-6 mt-4">
            <a 
              href="#features" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Funcionalidades
            </a>
            <a 
              href="#faq" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Dúvidas
            </a>
            <a 
              href="#contato" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Ir para a página inicial">
          <img 
            src="https://imgur.com/9QwM9mB.png" 
            alt="Logo Doctoriza" 
            className="h-9 w-auto cursor-pointer drop-shadow-sm" 
            style={{ maxWidth: 160 }}
          />
        </a>
        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Funcionalidades
          </a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Dúvidas
          </a>
          <a href="#contato" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>
        {/* Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 hover:text-primary transition-colors p-3 rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {/* Renderizar menu via Portal diretamente no body */}
      {isMenuOpen && createPortal(<MobileMenu />, document.body)}
    </header>
  );
};

export default Header;