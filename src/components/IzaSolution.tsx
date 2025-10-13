import { Button } from "@/components/ui/button";
import { Clock, Heart, MessageCircle } from "lucide-react";
import izaAvatar from "@/assets/iza-avatar.jpg";

export const IzaSolution = () => {
  const features = [
    {
      icon: Clock,
      title: "Resposta em 30 Segundos",
      description: "Iza atende imediatamente, qualifica o paciente e agenda sem precisar de um humano na linha. O paciente é cuidado na hora, não no dia seguinte.",
    },
    {
      icon: Heart,
      title: "IA com Empatia Clínica",
      description: "Ela entende a linguagem da saúde, responde a dúvidas complexas e só passa o paciente para a equipe humana quando ele está pronto para o agendamento.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>Solução 24/7</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Sua Clínica{" "}
            <span className="gradient-text">NUNCA Mais Perderá</span>{" "}
            um Paciente por Telefone Ocupado.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça a Iza, a Assistente Concierge que trabalha 24 horas por dia, 
            7 dias por semana, cuidando do paciente com empatia e contexto clínico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Iza Visual */}
          <div className="relative animate-fade-in">
            <div className="glass-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <img
                  src={izaAvatar}
                  alt="Iza - Assistente de IA"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Iza</h3>
              <p className="text-muted-foreground">Sua Concierge de IA 24/7</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponível</div>
                </div>
                <div className="glass-card p-4">
                  <div className="text-2xl font-bold text-primary">30s</div>
                  <div className="text-sm text-muted-foreground">Resposta</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="text-lg">
            Veja a Iza em Ação (Teste Agora)
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Fale com Nossos Especialistas
          </Button>
        </div>
      </div>
    </section>
  );
};
