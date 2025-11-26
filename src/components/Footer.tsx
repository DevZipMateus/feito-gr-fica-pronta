import { Mail, Clock, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="FEITO Gráfica Rápida" className="h-10 sm:h-12" />
            <p className="text-sm text-muted-foreground">
              Transformando ideias em realidade com qualidade, precisão e atenção aos detalhes.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:feitoartesgraficas@gmail.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>feitoartesgraficas@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Rua Professora Gabriela Varela, 207</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Segunda a Sexta, 09:30 às 18:30h</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Redes sociais</h3>
            <a
              href="https://www.instagram.com/feitograficarapida/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@feitograficarapida</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FEITO Gráfica Rápida. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 60.238.054/0001-11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;