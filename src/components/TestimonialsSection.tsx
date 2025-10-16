

import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import heroIzaChat from "@/assets/hero-iza-chat.jpg";
import kanbanDashboard from "@/assets/kanban-dashboard.jpg";

const testimonials = [
  {
    name: "Ana Paula",
  image: heroIzaChat,
    text: "A Upscale me deu um website profissional e um assistente virtual que mudou meu jogo. Minhas reservas triplicaram!",
    role: "Proprietária do Salão Pura Beleza",
  },
  {
    name: "João Silva",
  image: kanbanDashboard,
    text: "O chatbot com IA é um diferencial enorme. Meus clientes adoram e eu consigo focar no atendimento. Recomendo muito!",
    role: "Studio Mãos de Ouro",
  },
  {
    name: "Marina Souza",
  image: heroIzaChat,
    text: "A automação da Upscale facilitou minha rotina. Agora tenho mais tempo para meus clientes e menos preocupação com agendamentos.",
    role: "Barbearia Estilo Livre",
  },
  {
    name: "Carlos Mendes",
  image: kanbanDashboard,
    text: "Nunca foi tão fácil organizar minha agenda. O sistema é intuitivo e meus clientes elogiam a praticidade.",
    role: "Salão Top Hair",
  },
  {
    name: "Pedro Lima",
  image: heroIzaChat,
    text: "A equipe de suporte da Upscale é sensacional! Sempre que precisei, fui atendido rapidamente. Estou muito satisfeito.",
    role: "Barbearia Lima",
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
    const speed = 1; // px por frame (aumentei a velocidade)

    function animate() {
      // Quando chegar na metade do scroll (onde os depoimentos duplicados começam)
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        // Volta para o início sem interrupção visual
        carousel.scrollLeft = 0;
      } else {
        // Continue rolando
        carousel.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    
    // Inicia a animação
    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    /* ===== SEÇÃO DE DEPOIMENTOS ===== */
    /* Contém: Carrossel de depoimentos de clientes satisfeitos */
    <section id="testimonials" className="py-18 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
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
                <div className="bg-card px-6 pt-10 pb-36 rounded-2xl border shadow-lg h-full flex flex-col justify-between">
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