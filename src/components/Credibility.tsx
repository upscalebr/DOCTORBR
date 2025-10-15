import { Button } from "@/components/ui/button";
import { Award, Users, Zap, Quote } from "lucide-react";

export const Credibility = () => {
  const stats = [
    {
      icon: Award,
      value: "+R$ 2.5M",
      label: "em Receita Recuperada",
      description: "Para nossos clientes em 2024",
    },
    {
      icon: Zap,
      value: "40%",
      label: "de Ganho de Eficiência",
      description: "Média operacional das clínicas",
    },
    {
      icon: Users,
      value: "100%",
      label: "Sincronização Total",
      description: "Com seu prontuário eletrônico",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background -z-10" />
      
  {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
  <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Confiança e Resultado Comprovado:{" "}
            <span className="gradient-text">Doctoriza é Parceria</span>, Não Apenas Software.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os números que comprovam o valor de ter inteligência e previsibilidade na sua clínica.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="glass-card p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "A Doctoriza se tornou a minha melhor funcionária 24 horas. Conseguimos dobrar 
                a taxa de agendamentos em um mês, sem precisar contratar mais gente. O ROI foi 
                imediato e a Iza realmente entende o contexto clínico dos meus pacientes."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">Dra. Maria Silva</div>
                  <div className="text-muted-foreground">Clínica Dermatológica, São Paulo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="text-lg">
            Fale com um Especialista sobre a Integração
          </Button>
        </div>
      </div>
    </section>
  );
};
