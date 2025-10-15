import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
         {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
         <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="glass-card p-4 sm:p-12 md:p-16 text-center space-y-6 sm:space-y-8 relative overflow-hidden animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Transforme Sua Clínica Hoje</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            O Fim do Achismo.{" "}
            <span className="gradient-text">
              O Início da Previsibilidade.
            </span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Junte-se à nossa rede de clínicas aceleradas. Comece a transformar 
            seu atendimento em resultados reais e previsíveis.
          </p>
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 my-6 sm:my-12">
            <div className="glass-card p-4 sm:p-6">
              <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">7 Dias</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Teste Grátis Completo</div>
            </div>
            <div className="glass-card p-4 sm:p-6">
              <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Zero</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Setup ou Instalação</div>
            </div>
            <div className="glass-card p-4 sm:p-6">
              <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Suporte Especializado</div>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 w-full">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto">
              Experimente GRÁTIS por 7 Dias
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              Ver Planos e Valores
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
            Sem cartão de crédito necessário • Cancele quando quiser • Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
};
