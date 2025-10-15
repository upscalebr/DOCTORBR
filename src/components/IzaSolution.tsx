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
    <section className="py-0 sm:py-20 px-2 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background -z-10" />
  {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
  <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-4 sm:mb-8 space-y-2 animate-fade-in">
            <div className="mb-10 sm:mb-16 space-y-4 animate-fade-in flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm mt-4 font-medium mb-0 mx-auto">
                <img src="https://cdn.prod.website-files.com/6881f4248da03c548282df55/6881fd84dd0fd235f708eb52_Sparkle.svg" alt="Sparkle" className="w-4 h-4" />
                <span className="text-[#8B5CF6]">Solução 24/7</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-8 sm:px-0 mx-auto">
                Aumente a conversão da sua clínica sem precisar contratar mais pessoas.
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Automatize o atendimento, humanize a comunicação e transforme seu WhatsApp e seu Instagram em uma máquina de agendamentos.
              </p>
              <img
                src="https://i.imgur.com/0tT7SvA.png"
                alt="Demonstração Doctoriza"
                className="mx-auto my-6 w-full max-w-xl rounded-xl shadow-lg"
              />
            </div>
        </div>
        {/* Conteúdo removido, mantendo apenas o botão abaixo */}
        {/* CTA Único */}
        <div className="flex justify-center items-center animate-fade-in w-full mt-6">
          <Button
            size="lg"
            className="text-base sm:text-lg w-[270px] sm:w-auto !bg-[#1E2020] hover:!bg-[#232525] border-none mx-auto mb-6"
          >
            Quero aumentar minha conversão
          </Button>
        </div>
      </div>
    </section>
  );
}
