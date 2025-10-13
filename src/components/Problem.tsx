import { TrendingDown, MessageCircleOff, CalendarX } from "lucide-react";
import revenueLeakImage from "@/assets/revenue-leak.jpg";

export const Problem = () => {
  const leaks = [
    {
      icon: TrendingDown,
      title: "O Paciente Frio",
      description: "O lead chega do anúncio e esfria. Se sua clínica demorar mais que 3 minutos para responder, ele agenda no concorrente. A perda é imediata e silenciosa.",
      stat: "80% dos leads",
    },
    {
      icon: MessageCircleOff,
      title: "O Caos da Planilha",
      description: "Sua secretária se perde no WhatsApp, não sabe quem ligou primeiro ou quem precisa de follow-up. O caos nas conversas faz a receita vazar.",
      stat: "40% do tempo perdido",
    },
    {
      icon: CalendarX,
      title: "A Cadeira Vazia",
      description: "A falta de lembretes automáticos e a falha humana resultam na cadeira vazia. O custo de um no-show é mais alto do que você imagina.",
      stat: "R$ 180k/ano em média",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-16 space-y-4 animate-fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
            Seu Maior Prejuízo Não Está no Custo,{" "}
            <span className="gradient-text">Está no VAZAMENTO</span> de Pacientes.
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Você investe em tráfego (anúncios), mas perde o paciente nos pontos mais simples. 
            A Doctoriza resolve esses 3 vazamentos críticos de receita:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Leaks */}
          <div className="space-y-4 sm:space-y-6">
            {leaks.map((leak, index) => (
              <div
                key={index}
                className="glass-card-hover p-4 sm:p-6 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center mb-2 sm:mb-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <leak.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
                      <h3 className="text-lg sm:text-xl font-bold">Vazamento {index + 1}: {leak.title}</h3>
                      <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
                        {leak.stat}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {leak.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-delay mt-8 lg:mt-0">
            <div className="glass-card p-3 sm:p-8">
              <img
                src={revenueLeakImage}
                alt="Vazamento de Receita - Infográfico"
                className="rounded-2xl w-full h-auto max-h-[300px] sm:max-h-none object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -top-6 -right-6 glass-card p-4 sm:p-6 hidden lg:block">
              <div className="text-2xl sm:text-3xl font-bold text-destructive">-R$ 15k</div>
              <div className="text-xs sm:text-sm text-muted-foreground">perdidos/mês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
