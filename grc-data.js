// ==========================================================================
// Diagnóstico GRC — perguntas, pontuação e texto do diagnóstico.
// Portado de analise_grc.py (lógica determinística, sem a análise por IA
// e sem o plano de ação/cronograma de implementação).
// ==========================================================================

export const grcPillars = [
  {
    key: "gov",
    title: "Governança",
    icon: "building-2",
    norm: "ISO 9001",
    intro: "A governança estabelece a estrutura de liderança, responsabilidades e processos de tomada de decisão.",
    questions: [
      {
        id: "gov1",
        label: "Liderança e Comprometimento",
        help: "A alta direção demonstra comprometimento com o programa GRC, define políticas e aloca recursos adequados?",
        clause: "ISO 9001: Cláusula 5 - Liderança",
        hint: "Envolver a alta direção na definição de políticas e alocação de recursos para o GRC.",
      },
      {
        id: "gov2",
        label: "Planejamento Estratégico",
        help: "A organização possui planejamento estratégico com objetivos claros, metas mensuráveis e alinhamento com riscos e compliance?",
        clause: "ISO 9001: Cláusula 6 - Planejamento",
        hint: "Definir objetivos estratégicos alinhados à gestão de riscos e conformidade.",
      },
      {
        id: "gov3",
        label: "Estrutura Organizacional",
        help: "Existe estrutura organizacional com papéis e responsabilidades claramente definidos para governança, riscos e compliance?",
        clause: "ISO 9001: Cláusula 5.3 - Papéis e Responsabilidades",
        hint: "Estabelecer papéis e responsabilidades claros para governança, riscos e compliance.",
      },
      {
        id: "gov4",
        label: "Comunicação e Transparência",
        help: "A organização possui canais de comunicação eficazes para divulgar políticas, diretrizes e resultados aos stakeholders?",
        clause: "ISO 9001: Cláusula 7.4 - Comunicação",
        hint: "Implementar canais de comunicação eficazes para políticas e diretrizes.",
      },
      {
        id: "gov5",
        label: "Melhoria Contínua",
        help: "Existem processos estabelecidos para análise crítica, auditorias internas e melhoria contínua do sistema de gestão?",
        clause: "ISO 9001: Cláusula 10 - Melhoria",
        hint: "Estabelecer ciclos de revisão e melhoria dos processos de gestão.",
      },
    ],
  },
  {
    key: "risco",
    title: "Gestão de Riscos",
    icon: "shield-alert",
    norm: "ISO 31000",
    intro: "A gestão de riscos fornece estrutura para identificar, analisar, avaliar e tratar riscos de forma integrada à estratégia.",
    questions: [
      {
        id: "risco1",
        label: "Política de Gestão de Riscos",
        help: "Existe política formal de gestão de riscos, aprovada pela alta direção e comunicada à organização?",
        clause: "ISO 31000: Seção 5.2 - Liderança e Compromisso",
        hint: "Estabelecer política formal de gestão de riscos aprovada pela alta direção.",
      },
      {
        id: "risco2",
        label: "Identificação de Riscos",
        help: "A organização possui processo sistemático para identificar riscos em todas as áreas e processos?",
        clause: "ISO 31000: Seção 6.4.2 - Identificação de Riscos",
        hint: "Implementar processo sistemático para identificar riscos em todas as áreas.",
      },
      {
        id: "risco3",
        label: "Análise e Avaliação",
        help: "Os riscos identificados são analisados (probabilidade x impacto) e avaliados para priorização?",
        clause: "ISO 31000: Seção 6.4.3 e 6.4.4 - Análise e Avaliação",
        hint: "Definir critérios de análise (probabilidade x impacto) e priorização de riscos.",
      },
      {
        id: "risco4",
        label: "Tratamento de Riscos",
        help: "Existem planos de ação para tratar riscos prioritários (mitigar, transferir, aceitar ou evitar)?",
        clause: "ISO 31000: Seção 6.5 - Tratamento de Riscos",
        hint: "Estabelecer planos de ação para mitigar, transferir, aceitar ou evitar riscos.",
      },
      {
        id: "risco5",
        label: "Monitoramento e Revisão",
        help: "Os riscos e a eficácia dos controles são monitorados continuamente e revisados periodicamente?",
        clause: "ISO 31000: Seção 6.6 - Monitoramento e Revisão",
        hint: "Implementar monitoramento contínuo dos riscos e eficácia dos controles.",
      },
    ],
  },
  {
    key: "comp",
    title: "Compliance",
    icon: "clipboard-check",
    norm: "ISO 37301",
    intro: "O compliance estabelece sistema para prevenir, detectar e responder a não conformidades legais e regulatórias.",
    questions: [
      {
        id: "comp1",
        label: "Programa de Integridade",
        help: "A organização possui programa de compliance estruturado, com código de ética e políticas formalizadas?",
        clause: "ISO 37301: Cláusula 5 - Liderança e Políticas",
        hint: "Desenvolver programa de compliance com código de ética e políticas específicas.",
      },
      {
        id: "comp2",
        label: "Análise de Riscos de Compliance",
        help: "São identificados e avaliados os riscos de compliance (legais, regulatórios, éticos) da organização?",
        clause: "ISO 37301: Cláusula 6 - Planejamento e Riscos",
        hint: "Mapear riscos legais e regulatórios específicos do setor e operação.",
      },
      {
        id: "comp3",
        label: "Canais de Denúncia",
        help: "Existe canal de denúncias confidencial e procedimento formal para investigação de desvios de conduta?",
        clause: "ISO 37301: Cláusula 8.4 - Canais de Comunicação",
        hint: "Implementar canal de denúncias confidencial e procedimento de investigação.",
      },
      {
        id: "comp4",
        label: "Treinamento e Comunicação",
        help: "São realizados treinamentos periódicos sobre ética, compliance e código de conduta para todos os colaboradores?",
        clause: "ISO 37301: Cláusula 7 - Suporte e Competência",
        hint: "Realizar treinamentos periódicos sobre código de ética e compliance.",
      },
      {
        id: "comp5",
        label: "Due Diligence de Terceiros",
        help: "Existe processo de avaliação de integridade para parceiros, fornecedores e outros terceiros?",
        clause: "ISO 37301: Cláusula 8.2 - Due Diligence",
        hint: "Estabelecer processo de avaliação de integridade de parceiros e fornecedores.",
      },
    ],
  },
];

export const grcQuestionIds = grcPillars.flatMap((p) => p.questions.map((q) => q.id));

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
      descricao: "Sua organização possui um programa GRC robusto, com governança estabelecida, gestão de riscos estruturada e cultura de compliance consolidada.",
      cor: "var(--green)",
    };
  }
  if (pontuacaoGeral >= 70) {
    return {
      titulo: "Gerenciado",
      descricao: "O programa GRC está bem estruturado, mas ainda há oportunidades para maior integração entre os pilares.",
      cor: "var(--blue)",
    };
  }
  if (pontuacaoGeral >= 50) {
    return {
      titulo: "Definido",
      descricao: "Os processos básicos estão definidos, mas falta consistência na aplicação e integração entre governança, riscos e compliance.",
      cor: "var(--gold)",
    };
  }
  if (pontuacaoGeral >= 30) {
    return {
      titulo: "Inicial",
      descricao: "Existem algumas práticas isoladas, mas não há um programa GRC estruturado. Riscos significativos de não conformidade.",
      cor: "var(--red)",
    };
  }
  return {
    titulo: "Inexistente",
    descricao: "A organização não possui práticas estabelecidas de governança, riscos ou compliance. Vulnerabilidade crítica.",
    cor: "var(--red)",
  };
}

const riscosCondicionais = [
  { id: "gov1", texto: "Falta de comprometimento da liderança: riscos de direcionamento estratégico inadequado e recursos insuficientes para GRC." },
  { id: "gov2", texto: "Planejamento estratégico frágil: riscos de objetivos desalinhados com a gestão de riscos." },
  { id: "gov4", texto: "Comunicação ineficaz: riscos de políticas não compreendidas pelos colaboradores." },
  { id: "risco2", texto: "Identificação de riscos deficiente: riscos não mapeados podem se materializar sem preparação." },
  { id: "risco3", texto: "Análise de riscos inadequada: dificuldade em priorizar recursos para riscos mais críticos." },
  { id: "risco4", texto: "Tratamento de riscos inexistente: riscos identificados não são mitigados adequadamente." },
  { id: "comp1", texto: "Ausência de programa de compliance: exposição a riscos legais, regulatórios e de reputação." },
  { id: "comp3", texto: "Falta de canal de denúncias: dificuldade em detectar desvios de conduta internamente." },
  { id: "comp5", texto: "Due diligence de terceiros inexistente: riscos de corrupção e fraudes por parceiros e fornecedores." },
];

export function gerarDiagnosticoGrc(respostas) {
  const idsPorPilar = Object.fromEntries(grcPillars.map((p) => [p.key, p.questions.map((q) => q.id)]));

  const pontuacoes = Object.fromEntries(
    grcPillars.map((p) => [p.key, calcPontuacao(respostas, idsPorPilar[p.key])])
  );
  const pontuacaoGeral = (pontuacoes.gov + pontuacoes.risco + pontuacoes.comp) / 3;

  const totalSim = grcQuestionIds.filter((id) => respostas[id] === "Sim").length;
  const totalParcial = grcQuestionIds.filter((id) => respostas[id] === "Parcialmente").length;
  const totalNao = grcQuestionIds.filter((id) => respostas[id] === "Não").length;

  const maturidade = nivelMaturidade(pontuacaoGeral);

  const integracao = {
    "Governança ↔ Riscos": nivelIntegracao(pontuacoes.gov, pontuacoes.risco),
    "Riscos ↔ Compliance": nivelIntegracao(pontuacoes.risco, pontuacoes.comp),
    "Governança ↔ Compliance": nivelIntegracao(pontuacoes.gov, pontuacoes.comp),
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
