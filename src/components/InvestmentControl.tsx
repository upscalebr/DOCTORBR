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
    <section className="py-10 sm:py-20 px-2 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Funcionalidade Chave #3</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              Seu Investimento em Anúncios{" "}
              <span className="gradient-text">(Meta e Google)</span>{" "}
              com Retorno GARANTIDO.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Chega de gastar no escuro. Nosso Painel de Controle rastreia o dinheiro que você 
              investe para mostrar qual anúncio trouxe mais agendamentos fechados.
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
              Me Mostre o Retorno do Meu Investimento
            </Button>
          </div>
          {/* Right: ROI Visualization */}
          <div className="relative animate-fade-in-delay mt-8 lg:mt-0">
            <div className="glass-card p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="text-center space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-2xl font-bold">ROI Transparente</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Compare o desempenho de cada canal</p>
              </div>
              {/* Campaign Comparison */}
              <div className="space-y-2 sm:space-y-4">
                <div className="glass-card p-2 sm:p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-1 sm:mb-3">
                    <div>
                      <div className="font-semibold text-xs sm:text-base">Campanha Meta Ads</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-2xl font-bold text-primary">45</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
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
                <div className="glass-card p-2 sm:p-4 bg-secondary/50">
                  <div className="flex items-center justify-between mb-1 sm:mb-3">
                    <div>
                      <div className="font-semibold text-xs sm:text-base">Campanha Google Ads</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-2xl font-bold text-primary">32</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
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
                <div className="glass-card p-2 sm:p-4 bg-accent/5">
                  <div className="flex items-center justify-between mb-1 sm:mb-3">
                    <div>
                      <div className="font-semibold text-xs sm:text-base">Orgânico + Indicações</div>
                      <div className="text-xs text-muted-foreground">Últimos 30 dias</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-2xl font-bold text-primary">28</div>
                      <div className="text-xs text-muted-foreground">agendamentos</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
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
              <div className="pt-3 sm:pt-4 border-t border-border text-center">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Total de Agendamentos</div>
                <div className="text-2xl sm:text-4xl font-bold text-primary">105</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
