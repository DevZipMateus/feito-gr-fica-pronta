import { Mail, Clock, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img src={logo} alt="FEITO Gráfica Rápida" className="h-12" />
            <p className="text-sm text-muted-foreground">
              Transformando ideias em realidade com qualidade, precisão e atenção aos detalhes.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
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
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Redes sociais</h3>
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
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FEITO Gráfica Rápida. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 60.238.054/0001-11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;