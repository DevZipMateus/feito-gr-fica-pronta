import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-balance">
            FEITO GRÁFICA RÁPIDA
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-95 animate-fade-in text-balance">
            Transformamos suas ideias em realidade com qualidade, precisão e compromisso
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Especialistas em plotagem de adesivos para vitrines, carros, áreas externas e
            internas. Cada projeto é elaborado com atenção aos detalhes e acabamento perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" asChild className="text-lg">
              <a href="#servicos">Nossos serviços</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 border-white/60 text-white hover:bg-white hover:text-primary">
              <a href="#contato">Entre em contato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
