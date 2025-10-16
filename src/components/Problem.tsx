import { X, Clock, Users, HelpCircle, Star } from "lucide-react";
import revenueLeakImage from "@/assets/revenue-leak.jpg";

export const Problem = () => {
  const leaks = [
    {
      icon: X,
      title: "Pacientes ignorados no WhatsApp",
      description: "Mensagens demoram a ser respondidas ou se perdem no meio do volume. Você investe em marketing, mas quando os interessados chegam, não tem um atendimento rápido e eficiente para converter.",
    },
    {
      icon: Clock,
      title: "Atendimento só em horário comercial",
      description: "A clínica fecha às 18h, mas os pacientes continuam mandando mensagens à noite e nos fins de semana. Sem resposta, muitos procuram o concorrente.",
    },
    {
      icon: Users,
      title: "Falta de humanização no atendimento",
      description: "Respostas robóticas, frias ou atrasadas criam uma experiência ruim e afastam o paciente. Humanizar não é só ser 'simpático' — é responder na hora certa, com empatia e personalização.",
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada com tarefas repetitivas",
      description: "Lembretes, reagendamentos, confirmações, pesquisas de satisfação… tudo feito manualmente. O time perde tempo com o que poderia ser automatizado e sobra pouco para encantar o paciente.",
    },
    {
      icon: HelpCircle,
      title: "Sem clareza do que está funcionando ou não",
      description: "Não existe um método confiável para saber se os pacientes estão satisfeitos. Sem indicadores claros, o gestor fica no escuro e decisões são tomadas com base em achismos.",
    },
    {
      icon: Star,
      title: "Poucas avaliações e sem estratégia de mudança",
      description: "A reputação da clínica no Google fica estagnada. Mesmo com pacientes satisfeitos, não existe um processo automático e natural para transformar isso em avaliações positivas.",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-2 sm:px-4">
      {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
      <div className="mx-auto max-w-2xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-left sm:text-center mb-10 sm:mb-16 space-y-4 animate-fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-left sm:text-center -mt-12">
            Contrata, treina, mas nada muda...
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground w-full text-left sm:text-center">
            As falhas no atendimento impactam diretamente o faturamento da clínica. Pacientes desistem antes mesmo de agendar, e a equipe não dá conta de tudo sozinha.
          </p>
        </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Coluna da esquerda: 3 primeiros problemas */}
          <div className="space-y-4 sm:space-y-6">
            {leaks.slice(0, 3).map((leak, index) => (
              <div
                key={index}
                className="glass-card-hover p-4 sm:p-6 animate-fade-in h-full flex flex-col"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Ícone acima do título em todas as telas */}
                <div className="flex justify-start sm:justify-center mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <leak.icon className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {leak.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-1 sm:mt-2 !ml-0">
                    {leak.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Coluna da direita: 3 últimos problemas */}
          <div className="space-y-4 sm:space-y-6">
            {leaks.slice(3).map((leak, index) => (
              <div
                key={index + 3}
                className="glass-card-hover p-4 sm:p-6 animate-fade-in h-full flex flex-col"
                style={{ animationDelay: `${(index + 3) * 120}ms` }}
              >
                {/* Ícone acima do título em todas as telas */}
                <div className="flex justify-start sm:justify-center mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <leak.icon className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {leak.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-1 sm:mt-2 !ml-0">
                    {leak.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right: Visual removido conforme solicitado */}
        </div>
      </div>
    </section>
  );
};
