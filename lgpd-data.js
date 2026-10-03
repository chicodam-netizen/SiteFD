// ==========================================================================
// Diagnóstico LGPD — perguntas, pontuação e texto do diagnóstico.
// Portado de LGPD_diagnostico.py (lógica determinística, sem a análise por
// IA, sem o chat "Pergunte à IA" e sem recomendações de implementação).
// ==========================================================================

export const lgpdPillars = [
  {
    key: "gov",
    title: "Governança em Privacidade",
    icon: "shield-check",
    norm: "LGPD",
    intro: "A governança em privacidade estabelece a base de liderança, cultura e princípios para o programa de conformidade.",
    questions: [
      {
        id: "gov1",
        label: "Política de Privacidade e Proteção de Dados",
        help: "A organização possui Política de Privacidade formal, aprovada pela alta direção?",
        clause: "LGPD: Art. 50 - Boas práticas e governança",
        hint: "Elaborar e implementar Política de Privacidade formal, aprovada pela alta direção.",
      },
      {
        id: "gov2",
        label: "Comprometimento da Liderança",
        help: "A alta direção demonstra comprometimento ativo com a conformidade LGPD?",
        clause: "LGPD: Art. 50 - Programa de governança em privacidade",
        hint: "A alta direção deve demonstrar comprometimento ativo com a conformidade LGPD.",
      },
      {
        id: "gov3",
        label: "Cultura de Privacidade",
        help: "Existe programa de treinamento e conscientização sobre proteção de dados para os colaboradores?",
        clause: "LGPD: Art. 6º - Princípios (Transparência e Prevenção)",
        hint: "Implementar programa de conscientização e treinamento para todos os colaboradores.",
      },
      {
        id: "gov4",
        label: "Privacy by Design e Privacy by Default",
        help: "Os princípios de privacidade são incorporados desde a concepção de produtos e serviços?",
        clause: "LGPD: Privacy by Design e Privacy by Default",
        hint: "Incorporar princípios de privacidade desde a concepção de produtos/serviços.",
      },
    ],
  },
  {
    key: "ope",
    title: "Operações e Processos",
    icon: "workflow",
    norm: "LGPD",
    intro: "As operações e processos garantem que o tratamento de dados pessoais siga a lei no dia a dia da organização.",
    questions: [
      {
        id: "ope1",
        label: "Mapeamento de Dados Pessoais",
        help: "A organização possui inventário completo dos dados pessoais que trata?",
        clause: "LGPD: Art. 37 - Registro das operações de tratamento",
        hint: "Realizar inventário completo de todos os dados pessoais tratados pela organização.",
      },
      {
        id: "ope2",
        label: "Bases Legais para Tratamento",
        help: "Cada atividade de tratamento possui base legal identificada e documentada?",
        clause: "LGPD: Art. 7º e 11 - Bases legais para tratamento",
        hint: "Identificar e documentar as bases legais para cada atividade de tratamento.",
      },
      {
        id: "ope3",
        label: "Direitos dos Titulares",
        help: "Existe processo estabelecido para atender requisições dos titulares de dados?",
        clause: "LGPD: Art. 18 - Direitos do titular",
        hint: "Estabelecer processo para atender requisições dos titulares.",
      },
      {
        id: "ope4",
        label: "Compartilhamento com Terceiros",
        help: "Os contratos com operadores incluem cláusulas de proteção de dados?",
        clause: "LGPD: Art. 39 - Tratamento por operador",
        hint: "Implementar contratos com operadores e cláusulas de proteção de dados.",
      },
      {
        id: "ope5",
        label: "Relatórios de Impacto (DPIA/RIPD)",
        help: "São realizados Relatórios de Impacto à Proteção de Dados para operações de alto risco?",
        clause: "LGPD: Art. 38 - Relatório de Impacto (RIPD)",
        hint: "Realizar RIPD/DPIA para operações de alto risco.",
      },
    ],
  },
  {
    key: "dpo",
    title: "DPO - Encarregado",
    icon: "user-check",
    norm: "LGPD",
    intro: "O Encarregado (DPO) é o canal entre a organização, os titulares de dados e a ANPD.",
    questions: [
      {
        id: "dpo1",
        label: "Nomeação do DPO",
        help: "A organização nomeou formalmente o Encarregado (DPO)?",
        clause: "LGPD: Art. 41 - Encarregado (DPO)",
        hint: "Nomear formalmente o Encarregado (DPO).",
      },
      {
        id: "dpo2",
        label: "Funções e Responsabilidades",
        help: "As atribuições do DPO estão claramente definidas conforme a lei?",
        clause: "LGPD: Art. 41, §2º - Atribuições do Encarregado",
        hint: "Definir claramente as atribuições do DPO conforme Art. 41.",
      },
      {
        id: "dpo3",
        label: "Canais de Comunicação com o DPO",
        help: "Existem canais de comunicação disponíveis entre o DPO, os titulares e a ANPD?",
        clause: "LGPD: Art. 41, §1º - Canal de comunicação",
        hint: "Disponibilizar canais de comunicação com o DPO.",
      },
      {
        id: "dpo4",
        label: "Autonomia e Recursos do DPO",
        help: "O DPO possui autonomia, independência e recursos adequados para atuar?",
        clause: "LGPD: Art. 41 - Atuação do Encarregado",
        hint: "Garantir independência, autonomia e recursos adequados para o DPO atuar.",
      },
    ],
  },
  {
    key: "risco",
    title: "Gestão de Riscos LGPD",
    icon: "shield-alert",
    norm: "LGPD",
    intro: "A gestão de riscos trata da prevenção, detecção e resposta a incidentes envolvendo dados pessoais.",
    questions: [
      {
        id: "risco1",
        label: "Avaliação de Riscos de Privacidade",
        help: "Existe processo sistemático de avaliação de riscos de privacidade?",
        clause: "LGPD: Art. 6º - Prevenção",
        hint: "Implementar processo sistemático de identificação e avaliação de riscos de privacidade.",
      },
      {
        id: "risco2",
        label: "Gestão de Incidentes de Segurança",
        help: "Existe processo formal para gestão de incidentes e comunicação à ANPD?",
        clause: "LGPD: Art. 48 - Comunicação de incidente de segurança",
        hint: "Estabelecer processo para gestão de incidentes e notificação à ANPD.",
      },
      {
        id: "risco3",
        label: "Medidas de Segurança",
        help: "Foram implementadas medidas técnicas e administrativas adequadas para proteger os dados?",
        clause: "LGPD: Art. 46 - Medidas de segurança",
        hint: "Implementar medidas técnicas e administrativas para proteger dados pessoais.",
      },
      {
        id: "risco4",
        label: "Transferências Internacionais",
        help: "As transferências internacionais de dados seguem os mecanismos previstos na lei?",
        clause: "LGPD: Art. 33 - Transferência internacional de dados",
        hint: "Estabelecer mecanismos legais para transferências internacionais de dados.",
      },
    ],
  },
];

export const lgpdQuestionIds = lgpdPillars.flatMap((p) => p.questions.map((q) => q.id));

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
      titulo: "Excelente",
      descricao: "Sua organização possui um programa de conformidade LGPD robusto, com governança estabelecida, operações alinhadas, DPO atuante e gestão de riscos estruturada.",
      cor: "var(--green)",
    };
  }
  if (pontuacaoGeral >= 70) {
    return {
      titulo: "Bom",
      descricao: "O programa LGPD está bem estruturado, mas ainda há oportunidades para maior integração e refinamento dos processos.",
      cor: "var(--blue)",
    };
  }
  if (pontuacaoGeral >= 50) {
    return {
      titulo: "Regular",
      descricao: "Os processos básicos estão definidos, mas falta consistência na aplicação e conformidade plena com a LGPD.",
      cor: "var(--gold)",
    };
  }
  if (pontuacaoGeral >= 30) {
    return {
      titulo: "Inicial",
      descricao: "Existem algumas práticas isoladas, mas não há um programa de conformidade LGPD estruturado. Risco significativo de sanções.",
      cor: "var(--red)",
    };
  }
  return {
    titulo: "Crítico",
    descricao: "A organização não possui práticas estabelecidas de proteção de dados pessoais. Vulnerabilidade crítica a sanções da ANPD.",
    cor: "var(--red)",
  };
}

const riscosCondicionais = [
  { id: "gov1", texto: "Ausência de Política de Privacidade: risco de tratamento inadequado de dados pessoais." },
  { id: "gov2", texto: "Falta de comprometimento da liderança: risco de recursos insuficientes para o programa LGPD." },
  { id: "ope1", texto: "Falta de mapeamento de dados: risco de desconhecimento sobre quais dados a empresa trata." },
  { id: "ope2", texto: "Bases legais não identificadas: risco de tratamento ilegal de dados pessoais." },
  { id: "dpo1", texto: "DPO não nomeado: obrigação legal não cumprida, sujeita a penalidades da ANPD." },
  { id: "risco2", texto: "Processo de incidentes inexistente: risco de não notificação à ANPD em caso de vazamento." },
];

export function gerarDiagnosticoLgpd(respostas) {
  const idsPorPilar = Object.fromEntries(lgpdPillars.map((p) => [p.key, p.questions.map((q) => q.id)]));

  const pontuacoes = Object.fromEntries(
    lgpdPillars.map((p) => [p.key, calcPontuacao(respostas, idsPorPilar[p.key])])
  );
  const pontuacaoGeral = Object.values(pontuacoes).reduce((a, b) => a + b, 0) / lgpdPillars.length;

  const totalSim = lgpdQuestionIds.filter((id) => respostas[id] === "Sim").length;
  const totalParcial = lgpdQuestionIds.filter((id) => respostas[id] === "Parcialmente").length;
  const totalNao = lgpdQuestionIds.filter((id) => respostas[id] === "Não").length;

  const maturidade = nivelMaturidade(pontuacaoGeral);

  const integracao = {
    "Governança ↔ Operações": nivelIntegracao(pontuacoes.gov, pontuacoes.ope),
    "Governança ↔ DPO": nivelIntegracao(pontuacoes.gov, pontuacoes.dpo),
    "Governança ↔ Riscos": nivelIntegracao(pontuacoes.gov, pontuacoes.risco),
    "Operações ↔ DPO": nivelIntegracao(pontuacoes.ope, pontuacoes.dpo),
    "Operações ↔ Riscos": nivelIntegracao(pontuacoes.ope, pontuacoes.risco),
    "DPO ↔ Riscos": nivelIntegracao(pontuacoes.dpo, pontuacoes.risco),
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
