

import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import anaImage from "@/assets/anaImage.jpg";
import joaoImage from "@/assets/joaoImage.jpg";
import OracioNeto from "@/assets/OracioNeto.jpg";
import RogerioCosta from "@/assets/RogerioCosta.jpg";
import NathaliaRodrigues from "@/assets/NathaliaRodrigues.jpg";

const testimonials = [
  {
    name: "Ana Paula",
    image: anaImage,
    text: "Antes eu dependia apenas de indicações para ter pacientes. Depois que comecei a usar as soluções da empresa, minha agenda ficou organizada e completa todos os meses. O atendimento automatizado no WhatsApp facilitou muito a comunicação com minhas pacientes.",
    role: "Dermatologista",
  },
  {
    name: "João Silva",
    image: joaoImage,
    text: "O que mais me impressionou foi a clareza das métricas. Eu sei exatamente de onde vêm meus pacientes e consigo investir com segurança. A tecnologia de automação também reduziu bastante as faltas nas consultas.",
    role: "Ortopedista",
  },
  {
    name: "Orácio Neto",
    image: OracioNeto,
    text: "A empresa trouxe um processo estruturado e fácil de acompanhar. Hoje conseguimos oferecer uma experiência diferenciada desde o primeiro contato até o pós-consulta. Os pacientes elogiam a praticidade e nós ganhamos tempo.",
    role: "Otorrinolaringologista",
  },
  {
    name: "Rogério Costa",
    image: RogerioCosta,
    text: "A ferramenta mudou a forma como interagimos com os pacientes. Antes, perdíamos muito tempo com mensagens e confirmações manuais. Agora, o processo é automatizado e conseguimos focar em um atendimento mais humano, na hora da consulta. O retorno sobre o investimento foi rápido, com menos faltas e mais pacientes satisfeitos.",
    role: "Salão Top Hair",
  },
  {
    name: "Nathália Rodrigues",
    image: NathaliaRodrigues,
    text: "O maior impacto que a plataforma trouxe foi no faturamento. Com a organização dos agendamentos e a automação de lembretes, a taxa de faltas caiu e a agenda ficou mais cheia. Além disso, as campanhas de marketing me permitiram reativar pacientes antigos, o que trouxe um crescimento sustentável para a minha clínica. Foi um investimento que se pagou em poucos meses.",
    role: "Ortodentista",
  },
];


// Duplicar depoimentos para efeito de loop
const carouselTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    const speed = 1; // px per frame
    let lastTime = performance.now();
    const fps = 60;
    const frameDuration = 1000 / fps;

    function animate(now: number) {
      if (!carousel) return;
      if (now - lastTime >= frameDuration) {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += speed;
        }
        lastTime = now;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

      // O fundo lilás da seção vem de bg-muted/30. O valor de 'muted' está definido no seu tailwind.config.ts ou tema CSS.
      return (
        /* ===== SEÇÃO DE DEPOIMENTOS ===== */
          /* Contém: Carrossel de depoimentos de clientes satisfeitos */
        <section id="testimonials" className="py-22 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
            <div className="text-center pt-10 sm:pt-14 mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-5">
            A voz de quem já está{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              crescendo
            </span>
          </h2>
        </div>
        {/* Carrossel Automático de Depoimentos */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <ul
            ref={carouselRef}
            className="flex gap-8 no-scrollbar"
            style={{ 
              scrollBehavior: "unset",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}
          >
            {carouselTestimonials.map((t, idx) => (
              <li key={idx} className="min-w-[340px] max-w-[340px] flex-shrink-0 pt-2 pb-20">
                    <div className="bg-white px-6 pt-10 pb-8 rounded-2xl border shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-base">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                    <blockquote className="text-base mb-4 leading-relaxed">"{t.text}"</blockquote>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <style>{`
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
              overflow: hidden;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;