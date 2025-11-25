import { CheckCircle, Target, Award } from "lucide-react";

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
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground">
            O nome "Feito" reflete a essência de uma gráfica que transforma ideias em
            realidade. Em cada impressão, cada projeto, a nossa missão é entregar algo
            único, pronto e cuidadosamente elaborado. "Feito" é a representação de
            qualidade, precisão e compromisso, garantindo que o que você idealizou seja
            concretizado de maneira perfeita, com atenção aos detalhes e ao acabamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-lg-custom transition-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
