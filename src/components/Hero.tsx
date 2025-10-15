import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroImage from "@/assets/IZACOMDASHBOARD.png";


export const Hero = () => {
  return (
    <section 
      /* Para ajustar o distanciamento do topo, altere as classes pt-24 (mobile) e sm:pt-32 (desktop) abaixo */
      className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />
  {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
  <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Balão verde acima da headline, visível apenas no mobile */}
            <div className="flex justify-center mt-6 mb-2 sm:hidden">
              <span className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                Atendimento 24/7 com IA
              </span>
            </div>
            {/* Para ajustar a margem abaixo da headline no mobile, altere a classe mb-4 abaixo */}
            <h1 className="mt-8 sm:mt-0 mb-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
              Eficiência máxima com DoctorIza, a Inteligência Artificial que sua clínica merece
            </h1>
            {/* Subdescrição só no desktop/tablet */}
            <p className="hidden sm:block text-base sm:text-xl text-muted-foreground leading-relaxed text-left">
              Sua clínica em piloto automático. IZA atua 24/7 no WhatsApp e Instagram (entende os áudios!), organiza o funil de pacientes, coleta avaliações e se integra ao seu software de gestão. O fim das perdas por faltas e o começo do lucro real.
            </p>
            {/* Visual Highlights removidos conforme solicitado */}
            {/* CTAs */}
            {/* Botões só no desktop/tablet */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 w-full mt-0">
              <Button size="lg" className="text-base sm:text-lg group w-full sm:w-auto">
                Falar com um consultor
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg w-full sm:w-auto">
                <MessageSquare className="mr-2" />
                Veja a Iza em Ação
              </Button>
            </div>
          </div>
          {/* Right: Apenas Imagem */}
          <div className="relative animate-fade-in-delay mt-0 lg:mt-0">
            <div className="relative sm:glass-card sm:p-8">
              {/* Imagem arredondada no mobile e menor espaçamento acima */}
              <img
                src={heroImage}
                alt="Iza AI Concierge Interface"
                className="block w-full h-auto max-h-[350px] sm:max-h-none object-cover rounded-xl sm:rounded-2xl sm:shadow-2xl mt-0"
                style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
              />
              {/* Subdescrição abaixo da imagem no mobile */}
              <p className="block sm:hidden text-base text-muted-foreground leading-relaxed text-left mt-4 px-2">
                Sua clínica em piloto automático. IZA atua 24/7 no WhatsApp e Instagram (entende os áudios!), organiza o funil de pacientes, coleta avaliações e se integra ao seu software de gestão. O fim das perdas por faltas e o começo do lucro real.
              </p>
            </div>
            {/* Botões abaixo da imagem no mobile */}
            <div className="flex flex-col gap-3 w-full mt-4 sm:hidden">
              <Button size="lg" className="text-base group w-full">
                Falar com um consultor
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base w-full">
                <MessageSquare className="mr-2" />
                Veja a Iza em Ação
              </Button>
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
