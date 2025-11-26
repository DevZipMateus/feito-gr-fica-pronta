import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import materialsSamples from "@/assets/materials-samples.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "feitoartesgraficas@gmail.com",
      href: "mailto:feitoartesgraficas@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Professora Gabriela Varela, 207",
      href: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta, 09:30 às 18:30",
      href: null,
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@feitograficarapida",
      href: "https://www.instagram.com/feitograficarapida/",
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Está pronto para transformar suas ideias em realidade? Entre em contato conosco
            e solicite um orçamento
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-elegant">
          <img
            src={materialsSamples}
            alt="Amostras de materiais e equipamentos de impressão"
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Informações de contato</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-elegant">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
