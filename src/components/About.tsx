import { CheckCircle, Target, Award } from "lucide-react";
import aboutWorkspace from "@/assets/about-workspace.jpg";
import processInstallation from "@/assets/process-installation.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precisão",
      description: "Cada detalhe é pensado para garantir o resultado perfeito",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais de primeira linha e acabamento impecável",
    },
    {
      icon: CheckCircle,
      title: "Compromisso",
      description: "Entrega no prazo e atendimento personalizado",
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            O nome "Feito" reflete a essência de uma gráfica que transforma ideias em
            realidade. Em cada impressão, cada projeto, a nossa missão é entregar algo
            único, pronto e cuidadosamente elaborado. "Feito" é a representação de
            qualidade, precisão e compromisso, garantindo que o que você idealizou seja
            concretizado de maneira perfeita, com atenção aos detalhes e ao acabamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-xl overflow-hidden shadow-elegant">
            <img
              src={aboutWorkspace}
              alt="Espaço de trabalho da gráfica com equipamentos modernos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-elegant">
            <img
              src={processInstallation}
              alt="Processo de instalação de adesivos em vitrine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 sm:p-8 rounded-xl shadow-elegant hover:shadow-lg-custom transition-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
