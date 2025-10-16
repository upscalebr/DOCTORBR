
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import doctorizaLogo from "@/assets/doctorizalogo.png";

const Footer = () => {
  return (
  <footer className="bg-white border-t border-gray-200 text-gray-800">
  <div className="container mx-auto px-4 py-12">

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Logo e Descrição */}
    <div className="md:col-span-2">
      <div className="flex items-center space-x-2 mb-4">
        <img 
          src={doctorizaLogo}
          alt="Doctoriza Logo"
          className="h-8 w-auto"
        />
      </div>
      <p className="text-gray-600 mb-6 max-w-md">
        Doctoriza. Gestão para clínicas e consultórios de saúde.
        Nossa tecnologia otimiza o dia a dia da sua clínica, garantindo mais tempo para o que o seu negócio faz de melhor.
      </p>
      <div className="flex space-x-4">
        <a 
          href="#" 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </div>

    {/* Links Rápidos + Contato lado a lado no mobile (usando flex-row para mobile, flex-col para md+) */}
    <div className="col-span-2 flex flex-row gap-8 md:flex-col">
      {/* Links Rápidos */}
      <div className="w-1/2">
        <h3 className="font-semibold mb-4 text-gray-800">Links Rápidos</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/termos" className="text-gray-600 hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
          </li>
          <li>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Preços
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Suporte
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Blog
            </a>
          </li>
        </ul>
      </div>
      {/* Contato */}
      <div className="w-1/2">
        <h3 className="font-semibold mb-4 text-gray-800">Contato</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <a 
              href="mailto:contato@upscale.vu" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              contato@upscale.vu
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <a 
              href="tel:+5511999999999" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              (79) 98133-5709
            </a>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-1" />
            <span className="text-gray-600">
              Salvador, BA<br />
              Brasil
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Linha de Separação */}
  <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Upscale. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
