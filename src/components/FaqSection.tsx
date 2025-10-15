import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

const faqs = [
  {
    question: "Qual é o preço? Quanto custa?",
    answer: "O nosso plano completo tem um valor fixo de €29 por mês. É uma única assinatura que inclui tudo, sem surpresas."
  },
  {
    question: "Mas qual a diferença entre a Upscale e o Fresha/Booksy?",
    answer: `A diferença é fundamental: nós trabalhamos para o seu negócio, não para o nosso marketplace. Identificamos 3 armadilhas principais nessas plataformas:\n\nO Roubo de Reputação: Suas avaliações 5 estrelas fortalecem o Google da plataforma, não o seu.\n\nA Traição de Clientes: Quando sua agenda está cheia, a plataforma sugere ativamente seus concorrentes diretos para o seu cliente.\n\nA Dependência Forçada: Elas dificultam ou proíbem que você coloque links para seu Instagram ou WhatsApp, aprisionando o cliente no ecossistema deles.\n\nCom a Upscale, a reputação, os clientes e a marca são 100% seus.`
  },
  {
    question: "O que está incluído no plano de €29/mês?",
    answer: `Praticamente tudo o que você precisa. A assinatura inclui:\n\nFundação Digital: Smart Website Personalizado, hospedagem e configuração de domínio.\n\nAgendamentos: Agendamento online 24/7, lembretes automáticos por WhatsApp e E-mail, confirmações e reagendamentos.\n\nMarketing: Automação de avaliações para o Google, Chatbot com IA no site, gestão de clientes (CRM) e campanhas de E-mail Marketing.\n\nGestão do Negócio: Colaboradores ilimitados (o preço não aumenta se sua equipe crescer) e um dashboard de performance.\n\nServiço e Suporte: Nós construímos e configuramos tudo para você no início ("Onboarding 'Nós Construímos Para Você'") e oferecemos suporte prioritário via WhatsApp.`
  },
  {
    question: "Eu preciso configurar a plataforma sozinho(a)?",
    answer: "Não, esse é o nosso diferencial chave. Nossa equipe de marketing personaliza e entrega a plataforma pronta para você usar. O processo é simples: você nos envia seus materiais (logo, fotos) através de um formulário e nós fazemos o resto."
  },
  {
    question: "Posso cadastrar outros funcionários/colaboradores na plataforma?",
    answer: "Sim, você pode ter colaboradores ilimitados. O preço da assinatura não muda conforme sua empresa cresce."
  },
  {
    question: "O que é a Upscale?",
    answer: "A Upscale é uma Plataforma de Crescimento para prestadores de serviço, como salões, barbearias e spas, que se sentem reféns de marketplaces como Fresha e Booksy. Nossa missão é libertar esses negócios da dependência dessas plataformas, transformando-os de 'inquilinos' em 'donos' de suas próprias plataformas de crescimento."
  },
  {
    question: "Vocês têm um teste gratuito? Como posso começar?",
    answer: "Sim, oferecemos um Teste Gratuito de 14 Dias sem necessidade de cartão de crédito. Para começar, basta você me pedir o link da nossa página que eu te envio. Lá você poderá se cadastrar para o teste."
  },
  {
    question: "Como a Upscale funciona? O que vocês oferecem?",
    answer: `Nós entregamos um ecossistema de marketing particular através de uma assinatura única com tudo incluído. Os componentes principais são:\n\nSmart Website: Um site profissional 100% personalizado com a sua identidade visual, focado em conversão.\n\nSistema de Agendamento Inteligente: Integrado ao site, permite agendamentos 24/7 e, mais importante, nunca sugere um concorrente seu.\n\nAutomações de Crescimento: Ferramentas que, por exemplo, direcionam as avaliações 5 estrelas dos seus clientes diretamente para o Perfil do Google do seu negócio, e não para o da plataforma.`
  },
  {
    question: "O que acontece quando o teste gratuito de 14 dias acaba",
    answer: "Ao final do período de teste, você tem a opção de assinar nosso plano completo por um valor fixo e continuar usando a plataforma que já construímos e personalizamos para você."
  }
];

const FaqSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-xl">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Perguntas frequentes</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`} className="bg-gray-50 rounded-xl border border-gray-100">
            <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-base font-medium text-gray-900 text-left focus:outline-none no-underline hover:no-underline active:no-underline">
              <span className="text-left w-full">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-gray-700 text-sm text-left">
              <span className="block whitespace-pre-line">{faq.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
