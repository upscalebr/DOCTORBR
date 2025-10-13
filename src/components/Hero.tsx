import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-iza-chat.jpg";


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 py-10 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Sistema Anti-No-Show Inteligente</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left sm:text-left">
              Pare de Perder Renda.{" "}
              <span className="gradient-text">Doctoriza Garante</span>{" "}
              a Agenda da Sua Clínica com Previsibilidade Total.
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed text-left">
              O único sistema que blinda sua agenda contra as faltas (no-shows) e transforma
              seu atendimento 24h em uma fonte segura de agendamentos.
            </p>
            {/* Visual Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">-70%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">nas perdas por faltas</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">atendimento garantido</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">controle do investimento</div>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <Button size="lg" className="text-base sm:text-lg group w-full sm:w-auto">
                Agende Sua Análise de ROI (15 minutos)
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg w-full sm:w-auto">
                <MessageSquare className="mr-2" />
                Veja a Iza em Ação
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative animate-fade-in-delay mt-8 lg:mt-0">
            <div className="glass-card p-3 sm:p-8">
              <img
                src={heroImage}
                alt="Iza AI Concierge Interface"
                className="rounded-2xl w-full h-auto max-h-[350px] sm:max-h-none object-cover shadow-2xl"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 hidden lg:block">
              <div className="text-2xl font-bold text-primary">+R$ 180k</div>
              <div className="text-sm text-muted-foreground">Receita recuperada/mês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
