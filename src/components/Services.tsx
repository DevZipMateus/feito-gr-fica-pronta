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
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas em plotagem de adesivos com qualidade superior e
            acabamento profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-lg-custom transition-smooth"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
