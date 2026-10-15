// ==========================================================================
// Diagnóstico ISO 9001 — perguntas, pontuação e texto do diagnóstico.
// Portado do material de autodiagnóstico ISO 9001 (ISO9001.docx): 15
// perguntas cobrindo os capítulos 4 a 10 da norma ISO 9001:2015, agrupadas
// nas quatro etapas do ciclo PDCA (lógica determinística, sem IA).
// ==========================================================================

export const iso9001Pillars = [
  {
    key: "ctx",
    title: "Contexto e Liderança",
    icon: "compass",
    norm: "ISO 9001 Cap. 4-5",
    intro: "O contexto e a liderança estabelecem as bases do sistema de gestão: entendimento do negócio, das partes interessadas e comprometimento da alta direção.",
    questions: [
      {
        id: "ctx1",
        label: "Contexto da Organização",
        help: "A organização identificou os fatores externos e internos relacionados aos seus objetivos e direção estratégica?",
        clause: "ISO 9001:2015 — Cláusula 4.1",
        hint: "Documentar a análise de contexto (fatores externos e internos) e revisá-la periodicamente.",
      },
      {
        id: "ctx2",
        label: "Partes Interessadas",
        help: "A organização determinou as partes interessadas relevantes e suas necessidades e expectativas?",
        clause: "ISO 9001:2015 — Cláusula 4.2",
        hint: "Mapear clientes, fornecedores, colaboradores e órgãos reguladores, definindo quais requisitos serão incorporados ao sistema.",
      },
      {
        id: "ctx3",
        label: "Comprometimento da Alta Direção",
        help: "A alta direção assume responsabilidade pela eficácia do sistema de gestão da qualidade?",
        clause: "ISO 9001:2015 — Cláusula 5.1",
        hint: "Envolver a liderança nas decisões do sistema, integrando os requisitos aos processos de negócio.",
      },
      {
        id: "ctx4",
        label: "Política da Qualidade",
        help: "A organização estabeleceu uma política da qualidade alinhada à sua direção estratégica?",
        clause: "ISO 9001:2015 — Cláusula 5.2",
        hint: "Documentar, comunicar e tornar acessível a política, incluindo o compromisso com a satisfação do cliente e a melhoria contínua.",
      },
      {
        id: "ctx5",
        label: "Responsabilidades e Autoridades",
        help: "As responsabilidades e autoridades relativas ao sistema de gestão da qualidade estão definidas?",
        clause: "ISO 9001:2015 — Cláusula 5.3",
        hint: "Designar um representante da direção e comunicar claramente as responsabilidades a todos os envolvidos.",
      },
    ],
  },
  {
    key: "plan",
    title: "Planejamento e Apoio",
    icon: "clipboard-list",
    norm: "ISO 9001 Cap. 6-7",
    intro: "O planejamento e o apoio garantem que riscos, objetivos, recursos, competências e documentação sustentem o sistema de gestão da qualidade.",
    questions: [
      {
        id: "plan1",
        label: "Riscos e Oportunidades",
        help: "A organização identificou riscos e oportunidades que precisam ser abordados?",
        clause: "ISO 9001:2015 — Cláusula 6.1",
        hint: "Planejar ações para abordar riscos e oportunidades e avaliar periodicamente sua eficácia.",
      },
      {
        id: "plan2",
        label: "Objetivos da Qualidade",
        help: "Os objetivos da qualidade foram estabelecidos nas funções, níveis e processos relevantes?",
        clause: "ISO 9001:2015 — Cláusula 6.2",
        hint: "Definir objetivos mensuráveis e coerentes com a política, com ações, recursos e prazos para alcançá-los.",
      },
      {
        id: "plan3",
        label: "Recursos",
        help: "A organização determina e provê os recursos necessários ao sistema de gestão da qualidade?",
        clause: "ISO 9001:2015 — Cláusula 7.1",
        hint: "Garantir pessoas, infraestrutura e recursos de monitoramento e medição adequados aos processos.",
      },
      {
        id: "plan4",
        label: "Competência",
        help: "A organização assegura que as pessoas possuem a competência necessária?",
        clause: "ISO 9001:2015 — Cláusula 7.2",
        hint: "Definir requisitos de competência por função, oferecer treinamento e avaliar sua eficácia.",
      },
      {
        id: "plan5",
        label: "Conscientização",
        help: "A organização assegura que as pessoas estão conscientes da política da qualidade, dos objetivos e de sua contribuição?",
        clause: "ISO 9001:2015 — Cláusula 7.3",
        hint: "Garantir que os colaboradores compreendam as consequências do não atendimento aos requisitos.",
      },
      {
        id: "plan6",
        label: "Informação Documentada",
        help: "A organização determinou as informações documentadas necessárias e como controlá-las?",
        clause: "ISO 9001:2015 — Cláusula 7.5",
        hint: "Controlar criação, atualização, acesso e retenção de documentos, mantendo apenas o necessário.",
      },
    ],
  },
  {
    key: "op",
    title: "Operação",
    icon: "settings",
    norm: "ISO 9001 Cap. 8",
    intro: "A operação assegura que produtos, serviços e fornecedores externos atendam consistentemente aos requisitos do cliente.",
    questions: [
      {
        id: "op1",
        label: "Análise Crítica de Requisitos",
        help: "A organização analisa criticamente os requisitos para produtos e serviços antes de assumir compromissos com o cliente?",
        clause: "ISO 9001:2015 — Cláusula 8.2",
        hint: "Registrar formalmente a análise dos requisitos antes de firmar compromissos com clientes.",
      },
      {
        id: "op2",
        label: "Controle de Fornecedores Externos",
        help: "A organização controla os processos, produtos e serviços providos externamente?",
        clause: "ISO 9001:2015 — Cláusula 8.4",
        hint: "Definir critérios de avaliação, seleção e monitoramento de fornecedores, comunicando os requisitos claramente.",
      },
    ],
  },
  {
    key: "aval",
    title: "Avaliação e Melhoria",
    icon: "trending-up",
    norm: "ISO 9001 Cap. 9-10",
    intro: "A avaliação de desempenho e a melhoria contínua fecham o ciclo PDCA, garantindo a evolução constante do sistema de gestão.",
    questions: [
      {
        id: "aval1",
        label: "Monitoramento e Avaliação de Desempenho",
        help: "A organização monitora, mede, analisa e avalia o desempenho do sistema de gestão da qualidade?",
        clause: "ISO 9001:2015 — Cláusula 9.1",
        hint: "Definir o que monitorar, os métodos e a periodicidade, analisando a satisfação do cliente e os dados coletados.",
      },
      {
        id: "aval2",
        label: "Melhoria Contínua",
        help: "A organização melhora continuamente a adequação, suficiência e eficácia do sistema de gestão da qualidade?",
        clause: "ISO 9001:2015 — Cláusula 10.1 / 10.3",
        hint: "Usar os resultados de análises para identificar oportunidades de melhoria, com evidências concretas.",
      },
    ],
  },
];

export const iso9001QuestionIds = iso9001Pillars.flatMap((p) => p.questions.map((q) => q.id));

function calcPontuacao(respostas, ids) {
  const sim = ids.filter((id) => respostas[id] === "Sim").length;
  const parcial = ids.filter((id) => respostas[id] === "Parcialmente").length;
  return ((sim * 10 + parcial * 5) / (ids.length * 10)) * 100;
}

function nivelIntegracao(a, b) {
  if (a >= 60 && b >= 60) return "Alta";
  if (a >= 40 && b >= 40) return "Média";
  return "Baixa";
}

function nivelMaturidade(pontuacaoGeral) {
  if (pontuacaoGeral >= 85) {
    return {
      titulo: "Otimizado",
      descricao: "Sua organização possui um Sistema de Gestão da Qualidade maduro, com processos consolidados, cultura de melhoria contínua e forte orientação ao cliente — alinhado às exigências da ISO 9001:2015.",
      cor: "var(--green)",
    };
  }
  if (pontuacaoGeral >= 70) {
    return {
      titulo: "Gerenciado",
      descricao: "O Sistema de Gestão da Qualidade está bem estruturado, mas ainda há oportunidades de consolidar processos e aprofundar a cultura de melhoria contínua.",
      cor: "var(--blue)",
    };
  }
  if (pontuacaoGeral >= 50) {
    return {
      titulo: "Definido",
      descricao: "Os processos básicos da ISO 9001 estão definidos, mas falta consistência na aplicação e maturidade na gestão de riscos e desempenho.",
      cor: "var(--gold)",
    };
  }
  if (pontuacaoGeral >= 30) {
    return {
      titulo: "Inicial",
      descricao: "Existem práticas isoladas de gestão da qualidade, mas não há um sistema estruturado conforme a ISO 9001. Risco de inconsistência na entrega ao cliente.",
      cor: "var(--red)",
    };
  }
  return {
    titulo: "Inexistente",
    descricao: "A organização não possui um Sistema de Gestão da Qualidade estruturado. Vulnerabilidade crítica quanto à conformidade com requisitos de clientes e normas.",
    cor: "var(--red)",
  };
}

const riscosCondicionais = [
  { id: "ctx1", texto: "Contexto organizacional não documentado: risco de decisões estratégicas desalinhadas com fatores internos e externos relevantes." },
  { id: "ctx3", texto: "Falta de comprometimento da alta direção: risco de recursos insuficientes e baixa prioridade ao sistema de gestão da qualidade." },
  { id: "ctx4", texto: "Ausência de política da qualidade formalizada: risco de falta de direcionamento claro para toda a organização." },
  { id: "plan1", texto: "Riscos e oportunidades não identificados: risco de problemas recorrentes não tratados preventivamente." },
  { id: "plan4", texto: "Competências não avaliadas: risco de entregas inconsistentes por falta de capacitação adequada." },
  { id: "plan6", texto: "Controle de informação documentada deficiente: risco de perda de rastreabilidade e inconsistência de processos." },
  { id: "op1", texto: "Requisitos de clientes não analisados criticamente: risco de compromissos assumidos sem capacidade real de entrega." },
  { id: "op2", texto: "Fornecedores externos não controlados: risco de não conformidades na cadeia de suprimentos." },
  { id: "aval2", texto: "Ausência de processo de melhoria contínua: risco de estagnação e perda de competitividade." },
];

export function gerarDiagnosticoIso9001(respostas) {
  const idsPorPilar = Object.fromEntries(iso9001Pillars.map((p) => [p.key, p.questions.map((q) => q.id)]));

  const pontuacoes = Object.fromEntries(
    iso9001Pillars.map((p) => [p.key, calcPontuacao(respostas, idsPorPilar[p.key])])
  );
  const pontuacaoGeral = Object.values(pontuacoes).reduce((a, b) => a + b, 0) / iso9001Pillars.length;

  const totalSim = iso9001QuestionIds.filter((id) => respostas[id] === "Sim").length;
  const totalParcial = iso9001QuestionIds.filter((id) => respostas[id] === "Parcialmente").length;
  const totalNao = iso9001QuestionIds.filter((id) => respostas[id] === "Não").length;

  const maturidade = nivelMaturidade(pontuacaoGeral);

  const integracao = {
    "Contexto e Liderança ↔ Planejamento e Apoio": nivelIntegracao(pontuacoes.ctx, pontuacoes.plan),
    "Contexto e Liderança ↔ Operação": nivelIntegracao(pontuacoes.ctx, pontuacoes.op),
    "Contexto e Liderança ↔ Avaliação e Melhoria": nivelIntegracao(pontuacoes.ctx, pontuacoes.aval),
    "Planejamento e Apoio ↔ Operação": nivelIntegracao(pontuacoes.plan, pontuacoes.op),
    "Planejamento e Apoio ↔ Avaliação e Melhoria": nivelIntegracao(pontuacoes.plan, pontuacoes.aval),
    "Operação ↔ Avaliação e Melhoria": nivelIntegracao(pontuacoes.op, pontuacoes.aval),
  };
  const integracaoBaixa = Object.values(integracao).some((v) => v === "Baixa");

  const riscosIdentificados = riscosCondicionais
    .filter((r) => respostas[r.id] !== "Sim")
    .map((r) => r.texto)
    .slice(0, 8);

  return {
    pontuacoes,
    pontuacaoGeral,
    totalSim,
    totalParcial,
    totalNao,
    maturidade,
    integracao,
    integracaoBaixa,
    riscosIdentificados,
  };
}
