import serviceVitrine from "@/assets/service-vitrine.jpg";
import serviceCarros from "@/assets/service-carros.jpg";
import serviceEspacos from "@/assets/service-espacos.jpg";

const Services = () => {
  const services = [
    {
      title: "Plotagem em vitrines",
      description:
        "Adesivos personalizados para vitrines de lojas, criando identidade visual atrativa e profissional para o seu negócio.",
      image: serviceVitrine,
    },
    {
      title: "Plotagem em carros",
      description:
        "Transforme seu veículo em uma ferramenta de marketing poderosa com adesivos de alta qualidade e durabilidade.",
      image: serviceCarros,
    },
    {
      title: "Plotagem em áreas externas e internas",
      description:
        "Soluções completas para sinalização, decoração e comunicação visual em qualquer ambiente.",
      image: serviceEspacos,
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Oferecemos soluções completas em plotagem de adesivos com qualidade superior e
            acabamento profissional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-lg-custom transition-smooth"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
