import { Button } from "@/components/ui/button";
import { Globe, Bot, Zap, Smartphone, Clock, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const useChatAnimation = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>(new Array(12).fill(false));
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<NodeJS.Timeout[]>([]);
  const userInteracting = useRef(false);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

  // Funções para detectar interação do usuário
  const startInteraction = () => {
    userInteracting.current = true;
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
  };
  const endInteraction = () => {
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
    // Só considera "parou de interagir" após 2s sem eventos
    interactionTimeout.current = setTimeout(() => {
      userInteracting.current = false;
    }, 2000);
  };

  // Inicia a animação do chat apenas uma vez ao montar o componente
  useEffect(() => {
    setChatVisible(true);
    // Adiciona listeners de interação
    const el = messagesContainerRef.current;
    if (el) {
      el.addEventListener('scroll', startInteraction);
      el.addEventListener('mousedown', startInteraction);
      el.addEventListener('touchstart', startInteraction);
      el.addEventListener('mouseover', startInteraction);
      el.addEventListener('mouseleave', endInteraction);
      el.addEventListener('mouseup', endInteraction);
      el.addEventListener('touchend', endInteraction);
    }
    return () => {
      timeouts.current.forEach(clearTimeout);
      if (el) {
        el.removeEventListener('scroll', startInteraction);
        el.removeEventListener('mousedown', startInteraction);
        el.removeEventListener('touchstart', startInteraction);
        el.removeEventListener('mouseover', startInteraction);
        el.removeEventListener('mouseleave', endInteraction);
        el.removeEventListener('mouseup', endInteraction);
        el.removeEventListener('touchend', endInteraction);
      }
      if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!chatVisible) return;

    // Limpa timeouts antigos
    timeouts.current.forEach(clearTimeout);
    setVisibleMessages(new Array(12).fill(false));

    const delays = [1800, 3900, 6000, 8100, 10200, 12300, 14400, 16500, 18600, 20700, 22800, 24900];
    delays.forEach((delay, index) => {
      const t = setTimeout(() => {
        setVisibleMessages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        setTimeout(() => {
          if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
              top: messagesContainerRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }, delay);
      timeouts.current.push(t);
    });

    // Função para tentar resetar o chat, mas só se não houver interação
    const tryReset = () => {
      if (!userInteracting.current) {
        setVisibleMessages(new Array(12).fill(false));
        setChatVisible(false);
        setTimeout(() => setChatVisible(true), 100);
      } else {
        // Tenta novamente em 2s
        const retry = setTimeout(tryReset, 2000);
        timeouts.current.push(retry);
      }
    };

    // Após a última mensagem, tenta reiniciar tudo após 5s (mas só se não houver interação)
    const restartTimeout = setTimeout(tryReset, delays[delays.length - 1] + 5000);
    timeouts.current.push(restartTimeout);

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, [chatVisible]);

  return { chatRef, messagesContainerRef, visibleMessages };
};

const FeaturesSection = () => {
  // Chat 1 (primeira funcionalidade)
  const chat1 = useChatAnimation();
  // Chat 2 (segunda funcionalidade)
  const chat2 = useChatAnimation();
  return (
    /* ===== SEÇÃO DE DETALHAMENTO DAS FUNCIONALIDADES ===== */
    /* Contém: Três blocos principais de funcionalidades detalhadas */
    <section id="features" className="py-20">
  <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sua Equipe Focada nos seus Pacientes, <span className="text-primary">Não no WhatsApp.</span>
          </h2>
        </div>

        {/* Container das Funcionalidades Detalhadas */}
        <div className="space-y-24">
          {/* FUNCIONALIDADE 1: Smart Website */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: headline acima do chatbot, subheadline abaixo. Desktop: ordem original */}
            {/* Headline (mobile acima do chatbot, desktop à esquerda) */}
            <div className="block lg:hidden col-span-2 -mb-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-left" style={{ color: '#1E2020' }}>
                Agendamentos e Respostas Automáticas que Conquistam
              </h3>
            </div>
            {/* Chatbot (mobile acima da subheadline, desktop à direita) */}
            <div className="lg:order-2 relative col-span-2 lg:col-span-1" ref={chat1.chatRef}>
              {/* Moldura Liquid Glass (Chat 1) */}
              <div className="relative p-1 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                {/* Chat Container - Liquid Glass Effect */}
                <div className="relative rounded-3xl overflow-hidden liquid-glass">
                  {/* Chat Header - Cabeçalho */}
                  <div className="bg-white/10 backdrop-blur-sm border-b border-black/5 p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://imgur.com/q2PKrq9.png" 
                        alt="Mariana" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 -mb-1">Sua Clinica Aqui</p>
                      <p className="text-xs text-gray-600">Online agora</p>
                    </div>
                  </div>
                  {/* Chat Messages Area */}
                  <div ref={chat1.messagesContainerRef} className="p-4 space-y-3 h-48 overflow-y-auto chat-scroll scroll-smooth">
                    {/* Mariana 1 */}
                    {chat1.visibleMessages[0] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800 italic">Olá! Preciso agendar uma consulta.</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Iza 1 */}
                    {chat1.visibleMessages[1] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Oi, Mariana! É a Iza, tudo bem? Fico feliz que você escolheu nossa clínica. Para te ajudar a agendar, me diga: qual especialidade você procura?</p>
                        </div>
                      </div>
                    )}
                    {/* Mariana 2 */}
                    {chat1.visibleMessages[2] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Perfeito! E vocês aceitam convênios? Se não, qual o valor da consulta particular?</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Iza 2 */}
                    {chat1.visibleMessages[3] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Sobre convênios, aceitamos Bradesco Saúde, Unimed, SulAmérica e Amil.<br/><br/>Se for particular, a consulta custa R$ 500,00. Você pode pagar com PIX, dinheiro ou cartão.<br/><br/>Quer que eu verifique a disponibilidade de horários para você?</p>
                        </div>
                      </div>
                    )}
                    {/* Mariana 3 */}
                    {chat1.visibleMessages[4] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Sim! Preciso de um cardiologista. Poderia verificar os horários disponíveis para a semana que vem?</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Iza 3 */}
                    {chat1.visibleMessages[5] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Certo, vou verificar! Temos horários disponíveis com o Dr. Pedro Almeida na quinta-feira, dia 24, às 10h ou às 15h. Qual deles fica melhor para você?</p>
                        </div>
                      </div>
                    )}
                    {/* Mariana 4 */}
                    {chat1.visibleMessages[6] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">A quinta às 15h está ótimo! Ele atende pela Unimed?</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Iza 4 */}
                    {chat1.visibleMessages[7] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Sim, o Dr. Pedro Almeida atende pela Unimed. Já reservei seu horário para quinta-feira, 24 de outubro, às 15h.<br/><br/>A clínica fica na Rua das Flores, 123. Se precisar de mais alguma informação, é só falar comigo! Te espero aqui!</p>
                        </div>
                      </div>
                    )}
                    {/* Mariana 5 */}
                    {chat1.visibleMessages[8] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Obrigada, boa noite!</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Typing Indicator Final */}
                    {chat1.visibleMessages[9] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/20 border border-white/30 rounded-2xl rounded-tl-sm p-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Headline e subheadline para desktop (à esquerda) */}
            <div className="hidden lg:block lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Agendamentos e Respostas Automáticas que Conquistam
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Enquanto sua equipe se dedica ao que realmente importa, a inteligência artificial da Doctoriza interage com pacientes via WhatsApp, gerencia agendamentos diretamente no Google Agenda e otimiza sua comunicação. Zero erros, zero duplicidade, total eficiência.
              </p>
            </div>
          {/* End of first feature block */}
          {/* Subheadline (mobile abaixo do chatbot) */}
          <div className="block lg:hidden col-span-2 -mt-2">
            <p className="text-base sm:text-lg text-muted-foreground mb-6 text-left">
              Enquanto sua equipe se dedica ao que realmente importa, a inteligência artificial da Doctoriza interage com pacientes via WhatsApp, gerencia agendamentos diretamente no Google Agenda e otimiza sua comunicação. Zero erros, zero duplicidade, total eficiência.
            </p>
          </div>
          </div>

          {/* FUNCIONALIDADE 2: Inteligência Artificial */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
            <div className="lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Reduza Faltas em até 64% com Lembretes Proativos
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Nossos lembretes automáticos via WhatsApp não só recordam os pacientes das consultas, mas também confirmam a presença e permitem o reagendamento, minimizando faltas e otimizando a agenda da sua clínica.
              </p>
            </div>
            <div className="lg:order-2 relative" ref={chat2.chatRef}>
              
              {/* Moldura Liquid Glass */}
              <div className="relative p-1 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                
                {/* Chat Container - Liquid Glass Effect */}
                <div className="relative rounded-3xl overflow-hidden liquid-glass">
                
                {/* Chat Header Cabeçalho 2 */}
                <div className="bg-white/10 backdrop-blur-sm border-b border-black/5 p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="https://imgur.com/q2PKrq9.png" 
                      alt="Luana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Sua Clinica Aqui</p>
                    <p className="text-xs text-gray-600">Online agora</p>
                  </div>
                </div>
                {/* Chat Messages Area */}
                <div ref={chat2.messagesContainerRef} className="p-4 space-y-3 h-48 overflow-y-auto chat-scroll scroll-smooth">
                  {/* Iza 1 */}
                  {chat2.visibleMessages[0] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Olá, Luana, tudo bem?<br/><br/>Passando aqui só para lembrar que amanhã (26/08) às 14:00 tem uma consulta agendada conosco para a área de ortopedia.<br/><br/>Endereço: Rua teste, 123<br/>Bairro: Bela Vista - SP<br/><br/>Até amanhã! Obrigada!</p>
                      </div>
                    </div>
                  )}
                  {/* Luana 1 */}
                  {chat2.visibleMessages[1] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Oi Iza, tudo bem? Acabei de perceber que não vou conseguir ir.</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}
                  {/* Iza 2 */}
                  {chat2.visibleMessages[2] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Tudo bem, Lu! Que bom que você avisou! Sem problemas, já entendi que você precisa remarcar. Podemos verificar um novo dia e horário para você.</p>
                      </div>
                    </div>
                  )}
                  {/* Luana 2 */}
                  {chat2.visibleMessages[3] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Ótimo! Poderia me ajudar?</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}
                  {/* Iza 3 */}
                  {chat2.visibleMessages[4] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Claro! A sua consulta era com o Doutor Rodrigo, certo? Ele tem horários disponíveis na próxima quarta-feira, dia 03/09, às 14h ou às 16h. Qual seria a sua preferência?</p>
                      </div>
                    </div>
                  )}
                  {/* Luana 3 */}
                  {chat2.visibleMessages[5] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Perfeito! Pode ser às 16h.</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}
                  {/* Iza 4 */}
                  {chat2.visibleMessages[6] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Consulta remarcada, Luana! Seu novo horário com o Doutor Rodrigo é na quarta-feira, 03 de setembro, às 16h.<br/><br/>Qualquer coisa, é só me chamar por aqui. Tenha um ótimo dia!</p>
                      </div>
                    </div>
                  )}
                  {/* Typing Indicator Final */}
                  {chat2.visibleMessages[7] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/20 border border-white/30 rounded-2xl rounded-tl-sm p-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
              
              </div>
              
              
            </div>
          </div>

          {/* FUNCIONALIDADE 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...balão removido... */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Sua clínica com mais estrelas no Google: a maneira inteligente de atrair novos pacientes. 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                O segredo para se destacar online? Avaliações de qualidade. Com nossa ferramenta, você coleta feedback dos seus pacientes e, em seguida, estimula quem teve uma ótima experiência a deixar uma avaliação no Google. É um processo inteligente, que garante mais credibilidade e confiança para a sua marca.
              </p>
              {/* ...botão removido... */}
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full">
                <img src="https://imgur.com/BBljgGW.png" alt="Demonstração Doctoriza" className="rounded-xl shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
          {/*  FUNCIONALIDADE 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...balão removido... */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Transforme dados em decisões inteligentes. 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Conheça o coração da sua operação com relatórios e indicadores fáceis de entender. Nossos dashboards mostram o que está acontecendo na sua clínica, desde o número de agendamentos até a performance do time. Com essa visão, você identifica oportunidades e toma as melhores decisões para o seu negócio.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full">
                <img src="https://imgur.com/5V1Gcvl.png" alt="Demonstração Doctoriza" className="rounded-xl shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
          {/*  FUNCIONALIDADE 5 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...balão removido... */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Sua equipe de atendimento no controle, sem estresse. 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Chega de pular de uma tela para outra. Centralize todos os atendimentos do WhatsApp, Instagram, site e Messenger em uma única plataforma. Com a nossa Central de Mensagens, sua equipe trabalha de forma mais ágil, usa tags para organizar conversas e tem acesso ao histórico completo de cada paciente. Tudo isso em um só lugar, para um atendimento impecável.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full">
                <img src="https://imgur.com/8ijKfkL.png" alt="Demonstração Doctoriza" className="rounded-xl shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
          {/*  FUNCIONALIDADE 6 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...balão removido... */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Comunique-se em escala, sem perder a personalização. 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-0">
                Envie campanhas de marketing, lembretes ou comunicados para milhares de pacientes com apenas alguns cliques. Nossa ferramenta permite que você segmente a base de contatos por status (ativos, inativos) ou por tags personalizadas. É a forma mais fácil e eficiente de reativar pacientes e divulgar suas ações especiais.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full -mt-6">
                <img src="https://i.imgur.com/JrPOCB2.gif" alt="Demonstração Doctoriza" className="rounded-xl shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
          {/* FUNCIONALIDADE 7 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...balão removido... */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Comunique-se em escala, sem perder a personalização. 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-0">
                Envie campanhas de marketing, lembretes ou comunicados para milhares de pacientes com apenas alguns cliques. Nossa ferramenta permite que você segmente a base de contatos por status (ativos, inativos) ou por tags personalizadas. É a forma mais fácil e eficiente de reativar pacientes e divulgar suas ações especiais.
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full -mt-6">
                <img src="https://imgur.com/cteAb8N.gif" alt="Demonstração Doctoriza" className="rounded-xl shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;