import { Button } from "@/components/ui/button";
import { BarChart3, Target, Star, TrendingUp } from "lucide-react";

export const InvestmentControl = () => {
  const features = [
    {
      icon: Target,
      title: "Rastreamento Preciso (Do Clique ao Agendamento)",
      description: "Saiba exatamente qual campanha do Google ou Meta trouxe cada agendamento",
    },
    {
      icon: Star,
      title: "Avaliações 5 Estrelas Automáticas",
      description: "Sistema que solicita avaliações positivas automaticamente após consultas",
    },
    {
      icon: TrendingUp,
      title: "Previsão de Crescimento",
      description: "Análise preditiva que mostra onde investir mais para crescer",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Funcionalidade Chave #3</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Seu Investimento em Anúncios{" "}
              <span className="gradient-text">(Meta e Google)</span>{" "}
              com Retorno GARANTIDO.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chega de gastar no escuro. Nosso Painel de Controle rastreia o dinheiro que você 
              investe para mostrar qual anúncio trouxe mais agendamentos fechados.
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
              Me Mostre o Retorno do Meu Investimento
            </Button>
          </div>

          {/* Right: ROI Visualization */}
          <div className="relative animate-fade-in-delay">
            <div className="glass-card p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">ROI Transparente</h3>
                <p className="text-muted-foreground">Compare o desempenho de cada canal</p>
              </div>

              {/* Campaign Comparison */}
              <div className="space-y-4">
                <div className="glass-card p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold">Campanha Meta Ads</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">45</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Investido</div>
                      <div className="font-semibold">R$ 3.200</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">ROI</div>
                      <div className="font-semibold text-primary">425%</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4 bg-secondary/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold">Campanha Google Ads</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">32</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Investido</div>
                      <div className="font-semibold">R$ 2.800</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">ROI</div>
                      <div className="font-semibold text-primary">357%</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4 bg-accent/5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold">Orgânico + Indicações</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">28</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Investido</div>
                      <div className="font-semibold">R$ 0</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">ROI</div>
                      <div className="font-semibold text-primary">∞</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border text-center">
                <div className="text-sm text-muted-foreground mb-1">Total de Agendamentos</div>
                <div className="text-4xl font-bold text-primary">105</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
