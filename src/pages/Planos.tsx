import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingCard } from "../components/PricingCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FeatureCard } from "../components/FeatureCard";
import { useState } from "react";
import { MessageSquare, BarChart3, Workflow, CheckCircle2 } from "lucide-react";

const Planos = () => {
  // Estado para alternância dos grupos de planos
  const [activeGroup, setActiveGroup] = useState("mensal");

  const basePlans = [
    {
      name: "Inicial",
      users: "5 usuários (adicionais podem ser contratados)",
      patients: "200 pacientes únicos atendidos por mês (adicionais podem ser contratados)",
      features: [
        "Disparos em Massa via WhatsApp",
        "CRM (Funil de Vendas)",
        "Dashboards e Relatórios",
        "Sequências Ativas Ilimitadas",
        "Configuração do Fluxo de Atendimento",
        "Suporte Técnico via WhatsApp",
        "Integração com os Principais Sistemas de Agendamento do Mercado",
        "Robô que Entende Áudios",
        "E muito mais!",
      ],
      variant: "cyan" as const,
    },
    {
      name: "Básico",
      users: "5 usuários (adicionais podem ser contratados)",
      patients: "400 pacientes únicos atendidos por mês (adicionais podem ser contratados)",
      features: [
        "Disparos em Massa via WhatsApp",
        "CRM (Funil de Vendas)",
        "Dashboards e Relatórios",
        "Sequências Ativas Ilimitadas",
        "Configuração do Fluxo de Atendimento",
        "Suporte Técnico via WhatsApp",
        "Integração com os Principais Sistemas de Agendamento do Mercado",
        "Robô que Entende Áudios",
        "E muito mais!",
      ],
      variant: "blue" as const,
      isPopular: true,
    },
    {
      name: "Essencial",
      users: "5 usuários (adicionais podem ser contratados)",
      patients: "600 pacientes únicos atendidos por mês (adicionais podem ser contratados)",
      features: [
        "Disparos em Massa via WhatsApp",
        "CRM (Funil de Vendas)",
        "Dashboards e Relatórios",
        "Sequências Ativas Ilimitadas",
        "Configuração do Fluxo de Atendimento",
        "Suporte Técnico via WhatsApp",
        "Integração com os Principais Sistemas de Agendamento do Mercado",
        "Robô que Entende Áudios",
        "E muito mais!",
      ],
      variant: "cyan" as const,
    },
    {
      name: "Impulso",
      users: "5 usuários (adicionais podem ser contratados)",
      patients: "1200 pacientes únicos atendidos por mês (adicionais podem ser contratados)",
      features: [
        "Disparos em Massa via WhatsApp",
        "CRM (Funil de Vendas)",
        "Dashboards e Relatórios",
        "Sequências Ativas Ilimitadas",
        "Configuração do Fluxo de Atendimento",
        "Suporte Técnico via WhatsApp",
        "Integração com os Principais Sistemas de Agendamento do Mercado",
        "Robô que Entende Áudios",
        "E muito mais!",
      ],
      variant: "cyan" as const,
    },
    {
      name: "Escala",
      users: "5 usuários (adicionais podem ser contratados)",
      patients: "+2200 pacientes únicos atendidos por mês (adicionais podem ser contratados)",
      features: [
        "Disparos em Massa via WhatsApp",
        "CRM (Funil de Vendas)",
        "Dashboards e Relatórios",
        "Sequências Ativas Ilimitadas",
        "Configuração do Fluxo de Atendimento",
        "Suporte Técnico via WhatsApp",
        "Integração com os Principais Sistemas de Agendamento do Mercado",
        "Robô que Entende Áudios",
        "E muito mais!",
      ],
      variant: "gray" as const,
    },
  ];

  const planGroups = {
    mensal: [
      { ...basePlans[0], price: 399.9 },
      { ...basePlans[1], price: 499.9, isPopular: true },
      { ...basePlans[2], price: 699.9 },
      { ...basePlans[3], price: 1099.9 },
      { ...basePlans[4], price: "Sob Consulta" },
    ],
    "anual-parcelado": [
      { ...basePlans[0], price: 366.58, total: 4398.96 },
      { ...basePlans[1], price: 458.24, total: 5498.88, isPopular: true },
      { ...basePlans[2], price: 641.58, total: 7698.96 },
      { ...basePlans[3], price: 1008.24, total: 12098.88 },
      { ...basePlans[4], price: "Sob Consulta" },
    ],
    "anual-vista": [
      { ...basePlans[0], price: 3999 },
      { ...basePlans[1], price: 4999, isPopular: true },
      { ...basePlans[2], price: 6999 },
      { ...basePlans[3], price: 10999 },
      { ...basePlans[4], price: "Sob Consulta" },
    ],
  };

  const testimonials = [
    {
      name: "João Guerra",
      role: "CMO e sócio",
      company: "Instituto Pedro Ruiz",
      testimonial:
  "Nós saímos de uma média de R$ 1,5 milhão para R$ 2,15 milhões de faturamento. A Doctoriza é sensacional, ela mudou o nosso setor comercial e continua mudando a cada nova atualização que implementamos. Ela conseguiu nos ajudar na metrificação de vários indicadores que não tínhamos antes…",
    },
    {
      name: "Dr. Acklei Viana",
      role: "Sócio-proprietário",
      company: "NICAP",
      testimonial:
        "O que é mais elogiado pelos pacientes é que eles conseguem entrar em contato fora do horário comercial e marcar uma consulta para o dia seguinte, se houver vaga. Esse ganho de agilidade para nós é muito bom, pois temos uma secretária 24/7. É interessante tanto para a clínica quanto para o paciente, resolvendo o problema de ambos.",
    },
    {
      name: "Lucas Castrequini",
      role: "Sócio-proprietário",
      company: "MedicMais Rondonópolis",
      testimonial:
  "No início, eu tentava fazer a gestão, mas o volume era muito grande. Haviam vários números de WhatsApp logados para que a gente tentasse fazer essa gestão, e eu não conseguia. Eu sabia do volume, sabia do fluxo e precisava de uma ferramenta que pudesse me auxiliar, tanto na parte de gestão quanto na automação de alguns processos, e a Doctoriza veio na hora certa para resolver os meus problemas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mt-24 mb-3">
              Escolha o melhor plano para a sua clínica
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nunca mais perca pacientes por falta de atendimento imediato 24h por dia.
            </p>
          </div>


          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex justify-center items-end gap-2">
              <button
                className={`py-2 px-4 rounded-lg font-semibold transition-colors border text-base ${activeGroup === "mensal" ? "bg-primary text-white border-primary" : "bg-white text-primary border-gray-300"}`}
                onClick={() => setActiveGroup("mensal")}
              >
                Mensal
              </button>
              <div className="flex flex-col items-center">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-full mb-1">-8%</span>
                <button
                  className={`py-2 px-4 rounded-lg font-semibold transition-colors border text-base ${activeGroup === "anual-parcelado" ? "bg-primary text-white border-primary" : "bg-white text-primary border-gray-300"}`}
                  onClick={() => setActiveGroup("anual-parcelado")}
                >
                  Anual Parcelado (12x)
                </button>
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-full mb-1">-16%</span>
                <button
                  className={`py-2 px-4 rounded-lg font-semibold transition-colors border text-base ${activeGroup === "anual-vista" ? "bg-primary text-white border-primary" : "bg-white text-primary border-gray-300"}`}
                  onClick={() => setActiveGroup("anual-vista")}
                >
                  Anual à Vista
                </button>
              </div>
            </div>
            <p className="text-sm text-color-black text-muted-foreground mt-4 text-center max-w-xl">
              <strong>Obs I:</strong> Os planos mensais têm um tempo mínimo de fidelização de 3 (três) meses. Consulte nosso time para saber mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {planGroups[activeGroup].map((plan, index) => (
              <PricingCard key={index} {...plan} group={activeGroup} />
            ))}
          </div>

          <div className="text-center mt-8 text-xs text-muted-foreground max-w-4xl mx-auto">
            <p>
              *Obs: Consultas e mensagens adicionais não são cobradas caso você atinja o
              limite de pacientes únicos atendidos no seu plano. Consultas extras (1000
              unidades) e usuários adicionais (1 unidade) podem ser contratados
              separadamente.
            </p>
            <p className="mt-2">
              **A Doctoriza não se responsabiliza por bloqueios no WhatsApp causados por
              disparos em massa que violam os termos de uso da Meta. Seja quem indica o
              sucesso dos disparos.
            </p>
          </div>
        </div>
      </section>

      {/* ChatGPT Module Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-4">
                [MÓDULO ADICIONAL]: R$ 100,00/mês
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Doctoriza + ChatGPT</h2>
              <p className="text-lg mb-6">
                Com essa integração, é possível unir o melhor dos dois mundos: atendimento
                humanizado + atendimento automatizado.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>Interpretação de imagens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>Envio de áudios, imagens, vídeos e arquivos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>
                    Integração com sistemas de agendamento, sem a necessidade de botões para
                    escolher data e horário.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>
                    Responda os áudios dos seus pacientes com áudio usando uma voz genérica
                    ou clonando a voz de alguém da sua equipe.
                  </span>
                </li>
              </ul>
              <a href="https://wa.me/5571992443407" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="rounded-full">
                  Falar com um Consultor
                </Button>
              </a>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://imgur.com/Jyl8EwF.png"
                  alt="ChatGPT e Doctoriza"
                  className="rounded-3xl object-cover w-full max-w-xl shadow-lg"
                  style={{maxHeight: '350px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
  <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-400 text-white"> {/* Ajuste a cor do fundo aqui: from-blue-600 to-blue-400 */}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Implementação / Setup Doctoriza
          </h2>
          <p className="text-lg text-center mb-8 opacity-95">
            Para garantir que tudo funcione perfeitamente desde o primeiro dia, oferecemos
            um serviço completo de setup inicial com:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
              <span className="text-lg">
                Reunião de kickoff com o time de configuração
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
              <span className="text-lg">
                Configuração inicial da sua conta na Doctoriza
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
              <span className="text-lg">
                Reunião de treinamento com o time sobre o uso da plataforma
              </span>
            </div>
          </div>

          <p className="text-center mb-6 opacity-95">
            Nosso objetivo é garantir que sua clínica comece com o pé direito, com suporte
            técnico e estratégico desde a ativação.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <p className="mb-3">
              💡 <strong>Importante:</strong> A base de conhecimento (instruções e respostas
              da IA via ChatGPT) é de responsabilidade do cliente. A Doctoriza não se
              responsabiliza pelo conteúdo criado ou informado para o assistente virtual.
            </p>
            <p className="mb-3">
              ⏲️ <strong>Tempo médio de setup/implementação:</strong> 45 dias, à depender do
              seu engajamento.
            </p>
            <p>
              <strong>Obs:</strong> Para projetos customizados de integração, é necessário um
              envio de orçamento extra
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="mb-4">
              <img
                src="https://imgur.com/DgIjZq4.png"
                alt="Implementação Doctoriza"
                className="mx-auto mb-2 rounded-2xl object-contain"
                style={{maxWidth: '220px', maxHeight: '110px'}}
              />
              <p className="text-muted-foreground line-through text-xl mb-2">
                de R$2.400
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary text-2xl font-bold">por</span>
                <span className="text-primary text-5xl font-bold">R$700</span>
              </div>
            </div>
            <a href="https://wa.me/5571992443407" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="rounded-full mb-4">
                Falar com Consultor
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Válido para planos fechados à partir de 01/06/2025
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O que está incluso nos planos da Doctoriza
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={MessageSquare}
              title="Suporte para configurar e tirar dúvidas sobre sua conta"
              items={[
                "Suporte via WhatsApp",
                "Treinamentos Online*",
                "Onboarding personalizado para cada caso*",
                "Curso exclusivo sobre a plataforma*",
                "Equipe de Customer Success",
                "Equipe de Implementação*",
              ]}
            />
            <FeatureCard
              icon={BarChart3}
              title="Relatórios e Dashboards completos sobre os atendimentos"
              items={[
                "Dados completos sobre os atendimentos",
                "Gerenciamento de resultados dos anúncios",
                "Relatório de Métricas Humanas",
              ]}
            />
            <FeatureCard
              icon={Workflow}
              title="Automações que facilitam a rotina das clínicas*"
              items={[
                "Disparos em Massa",
                "Lembretes de Consulta",
                "Possibilidade de gerenciar contatos por listas e tags através das sequências ativas",
                "Respostas automáticas nos posts",
              ]}
            />
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground">
            * Alguns destes serviços são cobrados à parte. Consulte o nosso time caso tenha
            alguma dúvida.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
  <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-400 text-white"> {/* Ajuste a cor do fundo aqui: from-blue-600 to-blue-400 */}
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Donos de Clínicas e Hospitais aprovam a Doctoriza
            </h2>
            <p className="text-xl opacity-95">Veja por si mesmo…</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <a href="https://wa.me/5571992443407" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="rounded-full">
                Falar com Consultor
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <img
              src="https://imgur.com/0v3uCBm.png"
              alt="Parceira Doctoriza"
              className="mx-auto mb-4 rounded-2xl object-contain"
              style={{maxWidth: '220px', maxHeight: '110px'}}
            />
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              A Doctoriza é Parceira Oficial da Meta
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A Doctoriza será a melhor empresa já feita para transformar a comunicação da sua
              clínica e potencializar seus resultados.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="w-32 h-16 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                alt="Meta"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <a href="https://wa.me/5571992443407" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="rounded-full">
              Falar com um Consultor
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Planos;
