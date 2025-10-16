import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroImage from "@/assets/IZACOMDASHBOARD.png";


export const Hero = () => {
  return (
    <section 
      /* Espaçamento superior ampliado no desktop: sm:pt-48 */
      className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 pt-20 sm:pt-48 pb-10 sm:pb-20 overflow-hidden"
    >
  {/* O background anterior era um gradiente: 'bg-gradient-to-b from-secondary/30 to-background'. */}
  <div className="absolute inset-0 bg-white -z-10" />
  {/* Margens laterais mais estreitas e largura máxima reduzida para texto mais fluido, seguindo o padrão do site de referência */}
  <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
  {/* Alinhamento vertical centralizado no grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
    {/* Ordem: Texto antes da imagem no desktop, mantendo ordem mobile */}
  <div className="space-y-6 sm:space-y-8 animate-fade-in sm:ml-2">
            {/* Balão verde acima da headline, visível apenas no mobile */}
            <div className="flex justify-center mt-6 -mb-4 sm:hidden">
              <span
                className="inline-block text-sm font-semibold px-3 py-0.8 rounded-full border-2 border-dashed"
                style={{
                  borderColor: '#5dd188ff', // Tailwind green-500
                  background: '#eefff1',
                  color: '#22c55ec7',
                }}
              >
                Inovação tecnológica voltada à saúde.
              </span>
            </div>
            {/* Para ajustar a margem abaixo da headline no mobile, altere a classe mb-4 abaixo */}
            {/* Headline reduzida para evitar sobreposição: sm:text-2xl md:text-3xl lg:text-4xl */}
            <h1 className="mt-2 sm:mt-0 mb-0 text-3xl xs:text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight sm:text-left">
              <span className="sm:hidden">Eficiência máxima com DoctorIza, a IA que sua clínica merece</span>
              <span className="hidden sm:inline">Eficiência máxima com DoctorIza, a Inteligência Artificial que sua clínica merece</span>
            </h1>
            {/* Subdescrição só no desktop/tablet */}
            {/* Subdescrição ainda mais vertical: sm:max-w-xs, whitespace-normal */}
            <p className="hidden sm:block text-base sm:text-base text-muted-foreground leading-relaxed text-left sm:max-w-xs sm:whitespace-normal break-words">
              Sua clínica em piloto automático. IZA atua 24/7 no WhatsApp e Instagram (entende os áudios!), organiza o funil de pacientes, coleta avaliações e se integra ao seu software de gestão. O fim das perdas por faltas e o começo do lucro real.
            </p>
            {/* Visual Highlights removidos conforme solicitado */}
            {/* CTAs */}
            {/* Botões só no desktop/tablet */}
            {/* Botões reduzidos: sm:text-base, empilhados e largura 50% no desktop */}
            <div className="hidden sm:flex flex-col gap-3 w-full mt-0">
              <Button
                size="lg"
                className="text-base sm:text-base group sm:w-1/2 w-full bg-gradient-to-r from-[#9275FE] to-[#652FFF] text-white border-0 shadow-lg hover:brightness-110 transition-all"
                style={{ backgroundImage: 'linear-gradient(to right, #9275FE, #652FFF)' }}
                onClick={() => window.open('https://wa.me/5579981335709', '_blank')}
              >
                Falar com um consultor
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-base sm:w-1/2 w-full" onClick={() => window.open('https://wa.me/5579981335709', '_blank')}>
                <MessageSquare className="mr-2" />
                Veja a Iza em Ação
              </Button>
            </div>
          </div>
    {/* Right: Apenas Imagem */}
    <div className="relative animate-fade-in-delay">
      <div className="relative -mt-6 sm:mt-0">
        {/* Imagem arredondada no mobile e menor espaçamento acima */}
        {/* Imagem aumentada em 50% no desktop, com margem à direita */}
        <img
          src={heroImage}
          alt="Iza AI Concierge Interface"
          className="block w-full h-auto max-h-[350px] sm:max-h-none object-cover rounded-xl sm:rounded-2xl sm:shadow-2xl sm:scale-[1.3] sm:mr-[-4rem] mt-0"
          style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
        />
        {/* Subdescrição abaixo da imagem no mobile */}
        <p className="block sm:hidden text-base text-muted-foreground leading-relaxed text-left mt-4 px-2">
          Sua clínica em piloto automático. IZA atua 24/7 no WhatsApp e Instagram (entende os áudios!), organiza o funil de pacientes, coleta avaliações e se integra ao seu software de gestão. O fim das perdas por faltas e o começo do lucro real.
        </p>
      </div>
      {/* Botões abaixo da imagem no mobile */}
      <div className="flex flex-col gap-3 w-full mt-4 sm:hidden">
        <Button
          size="lg"
          className="text-base group w-full bg-gradient-to-r from-[#9275FE] to-[#652FFF] text-white border-0 shadow-lg hover:brightness-110 transition-all"
          style={{ backgroundImage: 'linear-gradient(to right, #9275FE, #652FFF)' }}
          onClick={() => window.open('https://wa.me/5579981335709', '_blank')}
        >
          Falar com um consultor
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="outline" className="text-base w-full" onClick={() => window.open('https://wa.me/5579981335709', '_blank')}>
          <MessageSquare className="mr-2" />
          Veja a Iza em Ação
        </Button>
        {/* Texto pequeno e imagem centralizada */}
        <div className="flex flex-col items-center mt-5">
          <span className="text-xs text-center text-muted-foreground mb-2">Integre a sua inteligência artificial sem atritos.</span>
          <img src="https://imgur.com/vaJw1bc.png" alt="Implante IA" className="w-auto h-auto" style={{ maxWidth: '70%' }} />
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};
