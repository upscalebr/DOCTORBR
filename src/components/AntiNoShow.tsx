import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, RefreshCw, TrendingUp } from "lucide-react";

export const AntiNoShow = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Confirmação Inteligente",
      description: "Lembretes automáticos por WhatsApp 48h, 24h e 2h antes da consulta",
    },
    {
      icon: RefreshCw,
      title: "Reagendamento Automático",
      description: "Iza identifica desistências e reagenda automaticamente na melhor data",
    },
    {
      icon: TrendingUp,
      title: "Mensuração de Lucro",
      description: "Dashboard que mostra exatamente quanto você deixou de perder",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Funcionalidade Chave #1</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Agenda Blindada:</span>{" "}
              O Fim das Faltas que Prejudicam Seu Faturamento.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Reduza o prejuízo das cadeiras vazias com nossa automação inteligente de lembretes. 
              Você pode reduzir suas perdas com no-show em até 80%.
            </p>
            {/* How it Works */}
            <div className="space-y-2 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Como Funciona:</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button size="lg" className="text-base sm:text-lg w-full sm:w-auto">
              Quero uma Agenda sem Buracos
            </Button>
          </div>
          {/* Right: Stats Card */}
          <div className="relative animate-fade-in-delay mt-8 lg:mt-0">
            <div className="glass-card p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="text-center space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-2xl font-bold">Impacto Real</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Resultados médios dos nossos clientes</p>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <div className="glass-card p-3 sm:p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-medium">Redução de No-Shows</span>
                    <span className="text-lg sm:text-2xl font-bold text-primary">80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                <div className="glass-card p-3 sm:p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-medium">Confirmações Automáticas</span>
                    <span className="text-lg sm:text-2xl font-bold text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div className="glass-card p-3 sm:p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-medium">Reagendamentos Bem-Sucedidos</span>
                    <span className="text-lg sm:text-2xl font-bold text-primary">70%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-border text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">R$ 180k+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Receita recuperada anualmente por clínica
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
