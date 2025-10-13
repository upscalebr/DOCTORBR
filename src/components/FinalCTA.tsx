import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card p-12 md:p-16 text-center space-y-8 relative overflow-hidden animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Transforme Sua Clínica Hoje</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            O Fim do Achismo.{" "}
            <span className="gradient-text">
              O Início da Previsibilidade.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Junte-se à nossa rede de clínicas aceleradas. Comece a transformar 
            seu atendimento em resultados reais e previsíveis.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">7 Dias</div>
              <div className="text-sm text-muted-foreground">Teste Grátis Completo</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Setup ou Instalação</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Especializado</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Experimente GRÁTIS por 7 Dias
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Ver Planos e Valores
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Sem cartão de crédito necessário • Cancele quando quiser • Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
};
