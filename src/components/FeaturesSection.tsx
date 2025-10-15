import { Button } from "@/components/ui/button";
import { Globe, Bot, Zap, Smartphone, Clock, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>(new Array(12).fill(false));
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !chatVisible) {
          setChatVisible(true);
          
          // Animar mensagens sequencialmente com intervalos aumentados em 50%
          const delays = [1800, 3900, 6000, 8100, 10200, 12300, 14400, 16500, 18600, 20700, 22800, 24900];
          
          delays.forEach((delay, index) => {
            setTimeout(() => {
              setVisibleMessages(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              
              // Auto scroll para a nova mensagem com delay menor
              setTimeout(() => {
                if (messagesContainerRef.current) {
                  messagesContainerRef.current.scrollTo({
                    top: messagesContainerRef.current.scrollHeight,
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }, delay);
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current);
      }
    };
  }, [chatVisible]);
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
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Agendamentos e Respostas Automáticas que Conquistam
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Enquanto sua equipe se dedica ao que realmente importa, a inteligência artificial da Doctoriza interage com pacientes via WhatsApp, gerencia agendamentos diretamente no Google Agenda e otimiza sua comunicação. Zero erros, zero duplicidade, total eficiência.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Smartphone className="w-4 h-4 mr-2 text-primary" />
                  Responsivo
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Pronto em minutos
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Seguro
                </div>
              </div>
              <Button className="text-base sm:text-lg" variant="default" onClick={() => window.location.href = 'https://api.leadconnectorhq.com/widget/booking/L9aalwcym3c2R6jcXdxl'}>
                Crie seu Website Grátis
              </Button>
            </div>
            <div className="lg:order-2 relative">
              {/* Moldura Liquid Glass (Chat) */}
              <div className="relative p-1 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                {/* Chat Container - Liquid Glass Effect */}
                <div className="relative rounded-3xl overflow-hidden liquid-glass">
                  {/* Chat Header */}
                  <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://i.pinimg.com/736x/b1/aa/73/b1aa73786a14bf19fb208dfbf90488e5.jpg" 
                        alt="Atendimento Barbearia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Atendimento Barbearia</p>
                      <p className="text-xs text-gray-600">Online agora</p>
                    </div>
                  </div>
                  {/* Chat Messages Area */}
                  <div ref={messagesContainerRef} className="p-4 space-y-3 h-48 overflow-y-auto chat-scroll scroll-smooth">
                    {/* Cliente Message 1 */}
                    {visibleMessages[0] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800 italic">Poxa, queria cortar o cabelo amanhã, mas será que tem vaga? Já é tarde pra ligar e no site os horários não coincidem com o que eu posso...</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Bot Message 1 */}
                    {visibleMessages[1] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Olá! 😊 Sim, temos alguns horários disponíveis para amanhã. Qual seria sua preferência (manhã/tarde) e o serviço desejado?</p>
                        </div>
                      </div>
                    )}
                    {/* Cliente Message 2 */}
                    {visibleMessages[2] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Queria cortar só o cabelo, na parte da manhã, tipo umas 10h ou 11h.</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Bot Message 2 */}
                    {visibleMessages[3] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Perfeito! Verificando a agenda... Temos um horário às 10:45 para corte de cabelo com o barbeiro Leo. Essa opção te atende?</p>
                        </div>
                      </div>
                    )}
                    {/* Cliente Message 3 */}
                    {visibleMessages[4] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Show! 10:45 está ótimo!</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Bot Message 3 */}
                    {visibleMessages[5] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Excelente! Para confirmar, por favor, me informe seu nome completo e um número de telefone para contato.</p>
                        </div>
                      </div>
                    )}
                    {/* Cliente Message 4 */}
                    {visibleMessages[6] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Carlos Silva, (79) 99999-1234</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Bot Message 4 */}
                    {visibleMessages[7] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Obrigado, Carlos! Seu corte de cabelo para amanhã às 10:45 com Leo está confirmado. Você receberá um lembrete por SMS. Mais alguma dúvida?</p>
                        </div>
                      </div>
                    )}
                    {/* Cliente Message 5 */}
                    {visibleMessages[8] && (
                      <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                        <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Não, tudo certo! Valeu!</p>
                        </div>
                        <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                      </div>
                    )}
                    {/* Bot Message 5 - Final */}
                    {visibleMessages[9] && (
                      <div className="flex items-start space-x-3 animate-fade-in-up">
                        <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                            alt="IA Icon" 
                            className="w-2.5 h-2.5"
                          />
                        </div>
                        <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                          <p className="text-xs text-gray-800">Por nada! Aguardamos você amanhã na Barbearia Alpha! Tenha um ótimo dia!</p>
                        </div>
                      </div>
                    )}
                    {/* Typing Indicator Final */}
                    {visibleMessages[10] && (
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
            <div className="lg:order-2 relative" ref={chatRef}>
              
              {/* Moldura Liquid Glass */}
              <div className="relative p-1 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                
                {/* Chat Container - Liquid Glass Effect */}
                <div className="relative rounded-3xl overflow-hidden liquid-glass">
                
                {/* Chat Header */}
                <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="https://i.pinimg.com/736x/b1/aa/73/b1aa73786a14bf19fb208dfbf90488e5.jpg" 
                      alt="Atendimento Barbearia" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Atendimento Barbearia</p>
                    <p className="text-xs text-gray-600">Online agora</p>
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div ref={messagesContainerRef} className="p-4 space-y-3 h-48 overflow-y-auto chat-scroll scroll-smooth">
                  
                  {/* Cliente Message 1 */}
                  {visibleMessages[0] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800 italic">Poxa, queria cortar o cabelo amanhã, mas será que tem vaga? Já é tarde pra ligar e no site os horários não coincidem com o que eu posso...</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}

                  {/* Bot Message 1 */}
                  {visibleMessages[1] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Olá! 😊 Sim, temos alguns horários disponíveis para amanhã. Qual seria sua preferência (manhã/tarde) e o serviço desejado?</p>
                      </div>
                    </div>
                  )}

                  {/* Cliente Message 2 */}
                  {visibleMessages[2] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Queria cortar só o cabelo, na parte da manhã, tipo umas 10h ou 11h.</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}

                  {/* Bot Message 2 */}
                  {visibleMessages[3] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Perfeito! Verificando a agenda... Temos um horário às 10:45 para corte de cabelo com o barbeiro Leo. Essa opção te atende?</p>
                      </div>
                    </div>
                  )}

                  {/* Cliente Message 3 */}
                  {visibleMessages[4] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Show! 10:45 está ótimo!</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}

                  {/* Bot Message 3 */}
                  {visibleMessages[5] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Excelente! Para confirmar, por favor, me informe seu nome completo e um número de telefone para contato.</p>
                      </div>
                    </div>
                  )}

                  {/* Cliente Message 4 */}
                  {visibleMessages[6] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Carlos Silva, (79) 99999-1234</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}

                  {/* Bot Message 4 */}
                  {visibleMessages[7] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Obrigado, Carlos! Seu corte de cabelo para amanhã às 10:45 com Leo está confirmado. Você receberá um lembrete por SMS. Mais alguma dúvida?</p>
                      </div>
                    </div>
                  )}

                  {/* Cliente Message 5 */}
                  {visibleMessages[8] && (
                    <div className="flex items-start space-x-3 justify-end animate-fade-in-up">
                      <div className="liquid-glass-message bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Não, tudo certo! Valeu!</p>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0"></div>
                    </div>
                  )}

                  {/* Bot Message 5 - Final */}
                  {visibleMessages[9] && (
                    <div className="flex items-start space-x-3 animate-fade-in-up">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
                          alt="IA Icon" 
                          className="w-2.5 h-2.5"
                        />
                      </div>
                      <div className="liquid-glass-message bg-white/30 border border-white/40 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-lg">
                        <p className="text-xs text-gray-800">Por nada! Aguardamos você amanhã na Barbearia Alpha! Tenha um ótimo dia!</p>
                      </div>
                    </div>
                  )}

                  {/* Typing Indicator Final */}
                  {visibleMessages[10] && (
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
              
              {/* Características do Chatbot */}
              <div className="flex items-center space-x-4 mt-6 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 mr-2 text-primary" />
                  Econômico
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Instantâneo
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Eficiente
                </div>
              </div>
              
              {/* Botão abaixo da animação */}
              <div className="text-left">
                <Button className="text-base sm:text-lg" variant="default" onClick={() => window.location.href = 'https://api.leadconnectorhq.com/widget/booking/L9aalwcym3c2R6jcXdxl'}>
                  Começar grátis com IA
                </Button>
              </div>
            </div>
          </div>

          {/* FUNCIONALIDADE 3: Agilidade Máxima */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Agilidade Máxima
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1E2020' }}>
                Equipe Focada no Paciente: Deixe a IA Gerenciar o Inesperado 
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Quando uma situação exige toque humano, a Doctoriza aciona sua equipe via Telegram, transferindo o contexto completo da conversa. E com o Assistente Interno, você gerencia agendas e tarefas com comandos de voz, mantendo o controle total da sua clínica, sem interrupções.
              </p>
              <Button className="text-base sm:text-lg" variant="default" onClick={() => window.location.href = 'https://api.leadconnectorhq.com/widget/booking/L9aalwcym3c2R6jcXdxl'}>
                Experimente a Agilidade
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-card to-muted p-6 rounded-2xl border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Agendar Corte</span>
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">Seg</div>
                    <div className="h-8 bg-black rounded flex items-center justify-center text-xs text-white">Ter</div>
                    <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">Qua</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-2">Horários disponíveis</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-gray-200 rounded text-xs flex items-center justify-center text-gray-700">09:00</div>
                      <div className="h-6 bg-black rounded text-xs flex items-center justify-center text-white">10:30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;