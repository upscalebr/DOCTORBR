import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "A Doctoriza vai substituir minha secretária?",
      answer: "Não. A Iza assume o trabalho repetitivo e cansativo de responder perguntas básicas, confirmar consultas e fazer agendamentos simples. Isso libera o foco da sua secretária para o cuidado humano, para lidar com casos complexos e para oferecer uma experiência ainda melhor aos pacientes que precisam de atenção especial.",
    },
    {
      question: "O sistema é complexo de usar?",
      answer: "Absolutamente não. O Painel de Bordo é intuitivo e foi desenhado especificamente para médicos e equipes de saúde que não têm tempo para aprender sistemas complicados. A maioria dos nossos clientes começa a usar produtivamente em menos de 1 hora. Nossa equipe oferece treinamento completo e suporte contínuo.",
    },
    {
      question: "Meus dados e os dos pacientes estão seguros?",
      answer: "Sim. A Doctoriza segue integralmente a LGPD (Lei Geral de Proteção de Dados) e utiliza criptografia de ponta a ponta. Todos os dados são armazenados em servidores seguros no Brasil, com backup automático. Nunca compartilhamos informações de pacientes com terceiros. Sua clínica mantém total controle sobre os dados.",
    },
    {
      question: "Como funciona a integração com meu prontuário eletrônico?",
      answer: "A Doctoriza se integra com os principais sistemas de prontuário eletrônico do mercado através de APIs seguras. O processo de integração é simples e realizado pela nossa equipe técnica, sem necessidade de conhecimento técnico da sua parte. Os agendamentos feitos pela Iza são automaticamente sincronizados com sua agenda existente.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos nossos clientes observa resultados significativos nas primeiras 2 semanas. A redução de no-shows começa imediatamente com os lembretes automáticos. O aumento na taxa de agendamentos geralmente é visível nos primeiros 7 dias, conforme a Iza passa a atender 24/7. O ROI completo geralmente é alcançado em 30-45 dias.",
    },
    {
      question: "Posso testar antes de me comprometer?",
      answer: "Sim! Oferecemos um período de teste gratuito de 7 dias com acesso completo a todas as funcionalidades. Você pode começar a usar a Iza e ver os resultados sem compromisso. Nossa equipe está disponível durante todo o período de teste para ajudar você a obter o máximo valor do sistema.",
    },
  ];

  return (
    <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 max-w-2xl sm:max-w-3xl md:max-w-4xl">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Perguntas Frequentes</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
              Toda Dúvida Merece{" "}
              <span className="gradient-text">Transparência</span>.
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-none overflow-hidden"
              >
                <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-base sm:text-lg font-semibold hover:text-primary transition-colors no-underline hover:no-underline active:no-underline">
                  <span className="text-left w-full">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
  );
};
