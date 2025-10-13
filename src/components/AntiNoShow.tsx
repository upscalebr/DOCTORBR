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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Funcionalidade Chave #1</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Agenda Blindada:</span>{" "}
              O Fim das Faltas que Prejudicam Seu Faturamento.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reduza o prejuízo das cadeiras vazias com nossa automação inteligente de lembretes. 
              Você pode reduzir suas perdas com no-show em até 80%.
            </p>

            {/* How it Works */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Como Funciona:</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="text-lg">
              Quero uma Agenda sem Buracos
            </Button>
          </div>

          {/* Right: Stats Card */}
          <div className="relative animate-fade-in-delay">
            <div className="glass-card p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">Impacto Real</h3>
                <p className="text-muted-foreground">Resultados médios dos nossos clientes</p>
              </div>

              <div className="space-y-4">
                <div className="glass-card p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Redução de No-Shows</span>
                    <span className="text-2xl font-bold text-primary">80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                <div className="glass-card p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Confirmações Automáticas</span>
                    <span className="text-2xl font-bold text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div className="glass-card p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Reagendamentos Bem-Sucedidos</span>
                    <span className="text-2xl font-bold text-primary">70%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border text-center">
                <div className="text-3xl font-bold text-primary mb-1">R$ 180k+</div>
                <div className="text-sm text-muted-foreground">
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
