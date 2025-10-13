import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, ArrowRight, RotateCcw } from "lucide-react";
import kanbanImage from "@/assets/kanban-dashboard.jpg";

export const Organization = () => {
  const features = [
    {
      icon: FileText,
      title: "Ficha Completa na Tela",
      description: "Todo histórico do paciente em um único lugar, sem trocar de aba",
    },
    {
      icon: ArrowRight,
      title: "Jornada em Etapas",
      description: "Funil Kanban visual: Novo Contato → Agendamento → Tratamento Fechado",
    },
    {
      icon: RotateCcw,
      title: "Automação de Retorno (LTV)",
      description: "Follow-ups automáticos para aumentar o valor de vida do paciente",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Dashboard Preview */}
          <div className="relative animate-fade-in order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="glass-card p-3 sm:p-4">
              <img
                src={kanbanImage}
                alt="Painel Kanban de Organização"
                className="rounded-2xl w-full h-auto max-h-[300px] sm:max-h-none object-cover shadow-2xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -left-6 glass-card p-3 sm:p-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs sm:text-sm font-bold">Painel Intuitivo</div>
                  <div className="text-xs text-muted-foreground">Design para médicos</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span>Funcionalidade Chave #2</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Controle Total:</span>{" "}
              O Painel de Bordo que Organiza a Jornada de Cada Paciente.
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              É o fim do caos de conversas espalhadas. Nosso Sistema de Organização de Pacientes 
              é intuitivo e foi desenhado para médicos. É o fim das planilhas e da perda de follow-up.
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
              Quero Organização Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
