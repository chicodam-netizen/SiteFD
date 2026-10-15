// ==========================================================================
// FD Labs — Static content data (parsed from the original React/Figma source)
// ==========================================================================

export const ufList = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO",
];

// ---------- Home ----------

export const homeImages = {
  hero: "https://images.unsplash.com/photo-1681164315990-b2a1e375eb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  meeting: "https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const services = [
  { icon: "database", title: "Consultoria em Governança de Dados", desc: "Soluções personalizadas para apoio ao programa de adequação à LGPD." },
  { icon: "code-2", title: "Desenvolvimento de Software", desc: "Sistemas personalizados, APIs e automações construídas com apoio de IA, com revisão e homologação de todos os desenvolvimentos com base em nosso amplo conhecimento em gestão de dados e processos e seguindo estritamente as melhores práticas." },
  { icon: "bar-chart-3", title: "Business Intelligence", desc: "Transformação de dados em insights estratégicos com dashboards, relatórios e análise de dados avançada." },
  { icon: "radar", title: "Mentoria de Desenvolvimento com IA", desc: "Acelere seus projetos com o apoio de um especialista. Mentoria em IA para o desenvolvimento da sua solução: orientação especializada, melhores práticas e uso inteligente dos recursos de IA. Agilidade, controle e segurança em cada entrega." },
];

export const stats = [
  { icon: "award", value: "20+", label: "Anos de Experiência" },
  { icon: "trending-up", value: "98%", label: "Taxa de Satisfação" },
  { icon: "zap", value: "50+", label: "Projetos Entregues" },
];

export const whyUs = [
  { text: "Desenvolvimento com IA na Abordagem Spec Driven DevOps", highlight: true },
  { text: "Equipe certificada" },
  { text: "Atendimento personalizado e suporte dedicado" },
  { text: "Metodologia ágil com foco em resultados" },
  { text: "Parcerias com os maiores fornecedores de TI do mundo" },
  { text: "Soluções escaláveis para empresas de todos os portes" },
  { text: "Compromisso com prazos e orçamentos acordados" },
];

// ---------- Gallery ----------

export const galleryCategories = ["Todos", "Software", "BI & Analytics", "Capacitação", "Consultoria"];

export const mediaItems = [
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Squad de Desenvolvimento", category: "Software", description: "Equipe ágil desenvolvendo sistemas customizados para automação de processos." },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Dashboard de Business Intelligence", category: "BI & Analytics", description: "Plataforma de BI com visualização de dados em tempo real para tomada de decisões." },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Treinamento de Equipes", category: "Capacitação", description: "Workshop sobre Desenvolvimento de Sistemas com uso de IA Generativa." },
  { id: 8, type: "image", src: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Transformação Digital", category: "Consultoria", description: "Roadmap de transformação digital para empresa do setor varejista." },
];

// ---------- Knowledge Base ----------

export const kbCategories = [
  { label: "Todos", icon: "book-open" },
  { label: "Governança de Dados", icon: "database" },
  { label: "Segurança", icon: "shield" },
  { label: "Software", icon: "code-2" },
  { label: "BI & Dados", icon: "bar-chart-3" },
];

export const levelColors = {
  "Básico": "#4ade80",
  "Intermediário": "#4a9eff",
  "Avançado": "#00c896",
};

export const articles = [
  { id: 3, title: "LGPD na Prática: O que sua empresa precisa saber", category: "Governança de Dados", summary: "Os 10 princípios, os papéis e as categorias de dados da Lei Geral de Proteção de Dados, direto da fonte oficial.", content: "## LGPD na Prática\n\nA Lei Geral de Proteção de Dados (Lei 13.709/2018) trouxe novas obrigações para empresas que processam dados pessoais de cidadãos brasileiros. Com base na publicação oficial do Governo Federal sobre a lei, organizamos abaixo os pontos essenciais para quem está começando a jornada de adequação.\n\n### Os 10 Princípios da LGPD (Art. 6º)\n\n- **Finalidade**: tratar dados apenas para propósitos legítimos e informados\n- **Adequação**: compatibilidade do tratamento com a finalidade informada\n- **Necessidade**: coletar o mínimo de dados possível para o objetivo\n- **Livre acesso**: garantir ao titular consulta facilitada sobre seus dados\n- **Qualidade dos dados**: manter dados exatos, claros e atualizados\n- **Transparência**: informações claras sobre o tratamento realizado\n- **Segurança**: medidas técnicas e administrativas de proteção\n- **Prevenção**: antecipar-se a possíveis danos\n- **Não discriminação**: vedado o tratamento para fins discriminatórios\n- **Responsabilização e prestação de contas**: demonstrar a adoção de medidas eficazes\n\n### Quem é Quem na LGPD\n\n- **Controlador**: quem decide como e por que os dados são tratados\n- **Operador**: executa o tratamento em nome do controlador\n- **Encarregado (DPO)**: canal de comunicação entre controlador, titulares e a ANPD\n- **ANPD**: Autoridade Nacional de Proteção de Dados, órgão fiscalizador federal\n- **Titular**: a pessoa física a quem os dados pertencem\n\n### Categorias de Dados\n\n- **Dados pessoais**: informações que identificam direta ou indiretamente uma pessoa (nome, CPF, e-mail, endereço)\n- **Dados sensíveis**: origem racial/étnica, convicção religiosa, opinião política, dado genético, biométrico, de saúde ou vida sexual — exigem proteção reforçada\n- **Dados anonimizados**: dados sem possibilidade de reidentificação, aos quais a LGPD deixa de se aplicar\n\n### Principais Obrigações Práticas\n\n- Nomear um Encarregado (DPO)\n- Mapear todos os dados pessoais tratados, incluindo sua base legal\n- Obter consentimento explícito para coleta, quando essa for a base legal aplicável\n- Implementar medidas técnicas e administrativas de segurança\n- Reportar incidentes de segurança à ANPD", author: "Carlos Mendes", readTime: "10 min", date: "20/03/2026", tags: ["LGPD", "Privacidade", "Compliance", "DPO", "ANPD"], featured: true, level: "Básico" },
  { id: 4, title: "Kubernetes: Orquestração de Containers para Produção", category: "Software", summary: "Como implementar e gerenciar clusters Kubernetes em ambientes de produção com alta disponibilidade.", content: "## Kubernetes em Produção\n\nO Kubernetes (K8s) é o padrão de fato para orquestração de containers. Sua adoção permite deployments mais rápidos, escalabilidade automática e alta resiliência.\n\n### Componentes Principais\n\n- **Control Plane**: API Server, etcd, Scheduler, Controller Manager\n- **Worker Nodes**: Kubelet, Kube-proxy, Container Runtime\n- **Pods**: Menor unidade deployável\n- **Services**: Abstração de rede para pods", author: "Roberto Silva", readTime: "15 min", date: "15/03/2026", tags: ["Kubernetes", "Docker", "DevOps", "Containers"], level: "Avançado" },
  { id: 9, title: "Desenvolvimento de Software com IA: Velocidade sem Abrir Mão da Governança", category: "Software", summary: "Como unimos as ferramentas mais atuais de IA generativa ao nosso amplo conhecimento em gestão de dados e processos para entregar sistemas sob medida mais rápido e com mais qualidade.", content: "## Desenvolvimento de Software Potencializado por IA\n\nNa FD Consultoria, unimos as ferramentas mais atuais de Inteligência Artificial ao nosso amplo conhecimento em gestão de dados e processos para entregar sistemas sob medida com mais velocidade, qualidade e segurança.\n\n### Como a IA acelera o desenvolvimento\n\n- **Geração assistida de código**: copilots de IA reduzem o tempo gasto com código repetitivo e testes, liberando a equipe para decisões de arquitetura e regras de negócio\n- **Revisão automatizada**: análise contínua identifica riscos de segurança, bugs e más práticas antes de ir para produção\n- **Documentação viva**: a documentação técnica é atualizada junto com o código, reduzindo desalinhamento entre times\n- **Automação de processos**: fluxos repetitivos do negócio (aprovações, integrações entre sistemas, geração de relatórios) são automatizados com agentes de IA conectados diretamente aos seus dados\n\n### O diferencial: dados e processos bem estruturados\n\nFerramentas de IA só entregam valor real quando os dados que as alimentam são confiáveis. É aí que entra nossa experiência em Governança de Dados, arquitetura Medallion/Lakehouse e mapeamento de processos: modelamos a base de dados e os fluxos de negócio antes de automatizar, evitando que a IA amplifique dados inconsistentes ou processos mal desenhados.\n\n### Onde aplicamos essa combinação\n\n1. Sistemas sob medida com funcionalidades de IA embutidas, como busca inteligente, geração de relatórios e assistentes internos\n2. Integrações e APIs que conectam sistemas legados a novas plataformas com apoio de IA\n3. Automação de processos empresariais de ponta a ponta, do dado bruto até a decisão\n\nSe sua empresa quer sair na frente unindo IA, dados bem governados e software sob medida, fale com nossa equipe.", author: "Roberto Silva", readTime: "9 min", date: "01/09/2026", tags: ["IA Generativa", "Engenharia de Software", "Governança de Dados", "Automação"], featured: true, level: "Intermediário" },
  { id: 6, title: "Power BI: Da Dados à Decisão em Minutos", category: "BI & Dados", summary: "Aprenda a criar dashboards impactantes com Power BI para apoiar a tomada de decisão executiva.", content: "## Power BI para Gestão\n\nO Microsoft Power BI transformou a forma como empresas visualizam e analisam dados. Com ele, é possível criar relatórios interativos em poucos minutos.\n\n### Recursos Principais\n\n- **Power Query**: Transformação e limpeza de dados\n- **DAX**: Linguagem de medidas e cálculos\n- **Visuais Interativos**: Gráficos, mapas, tabelas dinâmicas\n- **Power BI Service**: Publicação e compartilhamento na nuvem", author: "Marcos Oliveira", readTime: "9 min", date: "01/03/2026", tags: ["Power BI", "DAX", "Dashboard", "Microsoft"], level: "Básico" },
  { id: 7, title: "Zero Trust: A Nova Arquitetura de Segurança", category: "Segurança", summary: "Entenda o modelo Zero Trust e como implementá-lo progressivamente em sua organização.", content: "## Zero Trust Architecture\n\nO modelo Zero Trust parte do princípio \"nunca confie, sempre verifique\". É a evolução natural da segurança perimetral tradicional.\n\n### Princípios Fundamentais\n\n- Verificar explicitamente sempre\n- Usar acesso com menor privilégio\n- Assumir que haverá violações\n- Microsegmentação de rede\n- Monitoramento contínuo", author: "Fernando Duarte", readTime: "11 min", date: "22/02/2026", tags: ["Zero Trust", "IAM", "MFA", "SASE"], level: "Avançado" },
  { id: 8, title: "DevOps e CI/CD: Acelerando Entregas com Qualidade", category: "Software", summary: "Como estruturar pipelines de CI/CD e adotar práticas DevOps para entregas mais rápidas e confiáveis.", content: "## DevOps e CI/CD\n\nDevOps é uma cultura que une desenvolvimento e operações para entregar software com mais velocidade e qualidade.\n\n### Pipeline CI/CD\n\n- **CI (Continuous Integration)**: Integração frequente de código\n- **CD (Continuous Delivery)**: Deploy automatizado e confiável\n- **Ferramentas**: Jenkins, GitHub Actions, GitLab CI, Azure DevOps", author: "Roberto Silva", readTime: "13 min", date: "15/02/2026", tags: ["DevOps", "CI/CD", "Jenkins", "GitHub Actions"], level: "Intermediário" },
  { id: 11, title: "ISO 9001: Guia Prático para Implementação e Diagnóstico de Maturidade", category: "Governança de Dados", summary: "Os sete princípios, a estrutura em 10 capítulos e as principais mudanças da ISO 9001:2015 — a norma internacional de Sistema de Gestão da Qualidade.", content: "## ISO 9001: Guia Prático para Implementação e Diagnóstico de Maturidade\n\nA ISO 9001 é a norma de Sistema de Gestão da Qualidade publicada pela Organização Internacional de Normalização (ISO), cujo título completo é \"ISO 9001:2015 — Sistemas de gestão da qualidade — Requisitos\". É uma das normas mais adotadas da ISO, com mais de 1,1 milhão de certificados emitidos no mundo.\n\nA norma especifica os requisitos que uma organização deve atender quando precisa demonstrar sua capacidade de fornecer consistentemente produtos e serviços que atendam aos requisitos dos clientes e aos requisitos legais e regulamentares aplicáveis, e quando visa aumentar a satisfação do cliente por meio da aplicação eficaz do sistema. Todos os requisitos são genéricos e aplicáveis a qualquer organização, independentemente do tipo, porte ou produto/serviço fornecido.\n\n### Os Sete Princípios da Gestão da Qualidade\n\n- **Foco no cliente**: atender e superar as expectativas dos clientes é o propósito central da gestão da qualidade\n- **Liderança**: líderes fortes estabelecem unidade de propósito e criam condições para que a excelência floresça\n- **Engajamento das pessoas**: pessoas competentes, engajadas e qualificadas em todos os níveis criam valor para os clientes\n- **Abordagem por processos**: compreender as atividades como processos inter-relacionados gera resultados consistentes e previsíveis\n- **Melhoria**: organizações bem-sucedidas focam continuamente na melhoria, reagindo a mudanças no ambiente interno e externo\n- **Tomada de decisão baseada em evidências**: decisões baseadas na análise de dados têm maior probabilidade de produzir os resultados desejados\n- **Gestão de relacionamentos**: gerenciar relacionamentos com partes interessadas, como fornecedores, sustenta o sucesso contínuo\n\n### Estrutura da ISO 9001:2015 (Capítulos 4 a 10)\n\nA norma adota a Estrutura de Alto Nível (Anexo SL), compartilhada com outras normas de sistema de gestão (como a ISO 27001), o que facilita a integração entre elas:\n\n- **Capítulo 4 — Contexto da organização**: compreensão da organização, partes interessadas, escopo do sistema e processos\n- **Capítulo 5 — Liderança**: comprometimento da alta direção, política da qualidade, funções e responsabilidades\n- **Capítulo 6 — Planejamento**: ações para abordar riscos e oportunidades, objetivos da qualidade\n- **Capítulo 7 — Apoio**: recursos, competência, conscientização, comunicação, informação documentada\n- **Capítulo 8 — Operação**: planejamento operacional, requisitos para produtos e serviços, controle de fornecedores externos\n- **Capítulo 9 — Avaliação de desempenho**: monitoramento, medição, auditoria interna, análise crítica pela direção\n- **Capítulo 10 — Melhoria**: não conformidade, ação corretiva e melhoria contínua\n\n### Principais Mudanças em Relação à Versão 2008\n\n- Menos exigências obrigatórias de documentação, com foco maior em desempenho do que em documentos\n- Introdução da mentalidade de risco integrada a todo o sistema\n- Aplicação do ciclo PDCA (Planejar-Fazer-Checar-Agir) em todos os níveis\n- Maior facilidade de integração com outras normas de sistemas de gestão, graças à estrutura de alto nível comum\n- Requisitos genéricos aplicáveis tanto a serviços quanto à indústria\n\n### Benefícios da Implementação\n\nA norma ajuda as organizações a comprovar sua capacidade de fornecer consistentemente produtos e serviços de qualidade, além de servir como ferramenta para simplificar processos e aumentar a eficiência. Para pequenas e médias empresas, a ISO publica um guia específico de implementação, no qual destaca que o sistema deve ser visto como um investimento, cujo retorno vem da melhoria de processos e do aumento da competitividade de mercado.\n\n### Fontes Oficiais de Referência\n\n- ISO/TC 176/SC 2 — comitê técnico responsável pela ISO 9001\n- ABNT NBR ISO 9001:2015 — versão brasileira equivalente\n- ISO 9001:2015 for Small Enterprises — What to do? — guia oficial da ISO para pequenas empresas\n\nA FD Consultoria oferece um diagnóstico gratuito de maturidade ISO 9001, com 15 perguntas cobrindo os sete capítulos centrais da norma, direto na área de Diagnóstico Gratuito do site.\n\n### Atualização: ISO 9001:2026\n\nEm setembro de 2026 a ISO publicou a nova edição ISO 9001:2026, que substitui a versão 2015 descrita acima. Os sete princípios e a estrutura em 10 capítulos continuam os mesmos — veja o que mudou em detalhe no artigo \"ISO 9001:2026: O Que Mudou em Relação à Versão 2015\", também nesta Base de Conhecimento.", author: "Carlos Mendes", readTime: "10 min", date: "09/10/2026", tags: ["ISO 9001", "Gestão da Qualidade", "PDCA", "Governança"], featured: true, level: "Intermediário" },
  { id: 12, title: "ISO 9001:2026: O Que Mudou em Relação à Versão 2015", category: "Governança de Dados", summary: "A ISO publicou a nova edição da norma de gestão da qualidade em setembro de 2026. Veja o que mudou, o cronograma de transição e o que isso significa para empresas certificadas.", content: "## ISO 9001:2026: O Que Mudou em Relação à Versão 2015\n\nEm 16 de setembro de 2026, a ISO (Organização Internacional de Normalização) publicou a nova edição da ISO 9001, substituindo a versão 2015 que vigorava desde então. A revisão é evolutiva, não uma reformulação completa: a estrutura em 10 capítulos, o ciclo PDCA, a abordagem por processos e a mentalidade de risco continuam no centro da norma.\n\n### Principais Mudanças\n\n- **Cultura da qualidade e conduta ética**: a cláusula 5.1.1 (Liderança e comprometimento) passa a exigir explicitamente que a alta direção promova a cultura da qualidade e a conduta ética na organização, com reforço também nas cláusulas 7.1.4 (Ambiente para a operação dos processos) e 7.3 (Conscientização)\n- **Separação entre riscos e oportunidades**: a cláusula 6.1 foi dividida em três subcláusulas (6.1.1 a 6.1.3), tornando mais clara a distinção entre identificar riscos e identificar oportunidades — antes tratados de forma conjunta\n- **Gestão de mudanças reforçada**: a cláusula 6.3 (Planejamento de mudanças) ganhou requisitos mais robustos para planejar e avaliar a efetividade de mudanças no sistema de gestão da qualidade\n- **Melhoria contínua consolidada**: as antigas cláusulas 10.1 e 10.3 (da versão 2015) foram unificadas em uma nova cláusula 10.1, com orientação ampliada no Anexo A sobre como a melhoria se conecta a mudanças de contexto, riscos, oportunidades e adoção de tecnologia\n- **Mudanças climáticas**: a Emenda de 2024 à ISO 9001:2015 (que incluiu considerações sobre mudanças climáticas nas cláusulas 4.1 e 4.2) foi formalmente incorporada ao texto da norma\n- **Termos e definições**: a cláusula 3 passa a listar explicitamente os 20 termos harmonizados da Estrutura de Alto Nível (Anexo SL) da ISO, com referência à nova edição da ISO 9000, publicada em maio de 2026\n- **Anexo A ampliado**: o anexo explicativo da norma foi significativamente expandido, com orientações mais detalhadas alinhadas a cada um dos capítulos 4 a 10\n\n### Cronograma de Transição\n\nSegundo o comitê técnico responsável (ISO/TC 176/SC 2) e os organismos de acreditação, o prazo de transição segue o seguinte calendário:\n\n- Organismos de acreditação devem estar prontos para avaliar a ISO 9001:2026 até 31 de março de 2027\n- Organismos certificadores credenciados devem enviar suas declarações de transição até 30 de junho de 2027\n- Decisões de transição dos organismos de acreditação são esperadas até 30 de setembro de 2027\n- A partir de 31 de março de 2028, novas certificações iniciais só poderão ser emitidas com base na ISO 9001:2026\n- Empresas já certificadas na ISO 9001:2015 têm até 30 de setembro de 2029 para migrar, durante uma auditoria de manutenção, recertificação ou uma auditoria de transição específica\n\n### E a Versão Brasileira (ABNT)?\n\nAté o fechamento deste artigo, a ABNT (Associação Brasileira de Normas Técnicas) ainda não havia publicado a tradução oficial ABNT NBR ISO 9001:2026. Como ocorreu com a edição anterior, a publicação da versão nacional idêntica (ABNT NBR ISO 9001) tende a acontecer meses após a publicação internacional. Empresas brasileiras certificadas devem acompanhar o Comitê Brasileiro de Gestão da Qualidade (ABNT/CB-25) para a data oficial.\n\n### O Que Fazer Agora\n\nComo a revisão preserva a essência da norma, empresas já maduras em ISO 9001:2015 não enfrentam uma reformulação drástica. Os pontos que merecem atenção prática são: formalizar o compromisso da liderança com cultura da qualidade e ética, revisar como riscos e oportunidades são tratados separadamente, e reforçar o processo de planejamento e avaliação de mudanças no sistema de gestão. O prazo até setembro de 2029 permite uma transição planejada, sem urgência imediata.\n\n### Fontes Consultadas\n\n- ISO/TC 176/SC 2 — comitê técnico responsável pela ISO 9001, página oficial de notícias\n- DNV — organismo certificador, páginas técnicas sobre a revisão ISO 9001:2026\n- ANSI e outras entidades de normalização e certificação com cobertura da revisão", author: "Carlos Mendes", readTime: "9 min", date: "15/10/2026", tags: ["ISO 9001", "ISO 9001:2026", "Gestão da Qualidade", "Transição"], featured: true, level: "Avançado" },
  { id: 10, title: "Frameworks de Governança de Dados: Como Escolher a Abordagem Certa", category: "Governança de Dados", summary: "DAMA-DMBOK, ISO/IEC 38505, IBM Maturity Model e DGI Framework — o que cada um oferece e quando usar cada um.", content: "## Frameworks de Governança de Dados\n\nGovernança de dados não é um conceito único: existem diferentes frameworks reconhecidos no mercado, cada um com um foco e um ponto de partida diferente. Conhecer as opções ajuda a escolher (ou combinar) a abordagem certa para a realidade da sua empresa.\n\n### DAMA-DMBOK: o padrão de referência do mercado\n\nO DAMA-DMBOK (Data Management Body of Knowledge), publicado pela DAMA International, é o guia mais adotado globalmente para gestão de dados. Ele organiza a disciplina na chamada \"Roda do DAMA\": a Governança de Dados fica no centro, coordenando 11 áreas de conhecimento ao redor.\n\n- **Governança de Dados**: planejamento, supervisão e controle sobre a gestão e o uso dos dados\n- **Arquitetura de Dados**: o projeto de como os ativos de dados se organizam, alinhado à estratégia de negócio\n- **Modelagem e Design de Dados**: descoberta, análise e representação de requisitos de dados\n- **Armazenamento e Operações**: administração e recuperação de bancos de dados e storage\n- **Segurança de Dados**: privacidade, confidencialidade e prevenção de acessos indevidos\n- **Integração e Interoperabilidade**: movimentação e consolidação de dados entre sistemas\n- **Gestão de Documentos e Conteúdo**: dados não estruturados e semiestruturados\n- **Dados de Referência e Mestres**: a \"fonte única da verdade\" para entidades-chave do negócio\n- **Data Warehousing e BI**: dados históricos organizados para apoiar decisões\n- **Metadados**: o \"dado sobre o dado\", essencial para rastreabilidade\n- **Qualidade de Dados**: exatidão, completude e consistência da informação\n\n### Outros frameworks relevantes\n\n- **ISO/IEC 38505**: norma internacional baseada na ISO/IEC 38500 (governança de TI), focada em avaliação, direção e monitoramento do uso de dados pelo conselho e alta administração. Ideal para empresas que já seguem outras normas ISO ou precisam de compliance internacional.\n- **IBM Data Governance Council Maturity Model**: modelo de maturidade com 11 componentes (como Políticas, Metadados e Qualidade) e 4 níveis de evolução (Inicial, Básico, Intermediário, Avançado). Bom para quem busca métricas claras e progresso mensurável.\n- **DGI Framework (The Data Governance Institute)**: framework flexível baseado em 10 componentes universais, definindo missão, objetivos, regras e direitos de decisão. Indicado para organizações que precisam de um modelo adaptável ao seu porte e cultura.\n\n### Como escolher\n\nNa prática, poucas empresas adotam um framework \"puro\": o mais comum é combinar elementos de diferentes abordagens, usando o DAMA-DMBOK como vocabulário comum e normas como a ISO/IEC 38505 ou modelos de maturidade para estruturar a evolução do programa ao longo do tempo. O caminho certo depende do tamanho da empresa, do setor e do nível de maturidade atual em dados.", author: "Carlos Mendes", readTime: "11 min", date: "15/09/2026", tags: ["DAMA-DMBOK", "ISO 38505", "Governança de Dados", "Maturidade"], featured: true, level: "Intermediário" },
];

// ---------- Marketing ----------

export const marketingServices = [
  { icon: "palette", title: "Design Gráfico" },
  { icon: "megaphone", title: "Desenvolvimento de Campanhas" },
  { icon: "share-2", title: "Social Media" },
  { icon: "sparkles", title: "Branding" },
  { icon: "refresh-cw", title: "Rebranding" },
  { icon: "smartphone", title: "Protótipos (UI/UX)" },
  { icon: "video", title: "Edição de Vídeos" },
  { icon: "image", title: "Edição de Imagens" },
];

export const marketingPortfolio = [
  { title: "Rebranding Corporativo", description: "Identidade visual completa para empresa de tecnologia", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800" },
  { title: "Campanha Digital", description: "Estratégia de lançamento de produto com foco em conversão", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" },
  { title: "UI/UX Design", description: "Protótipo interativo para aplicativo mobile", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" },
  { title: "Conteúdo para Redes Sociais", description: "Gestão visual e estratégica de perfis empresariais", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800" },
];

// ---------- Arthur ----------

export const arthurServices = [
  { id: "design", icon: "palette", title: "Design Gráfico" },
  { id: "campanhas", icon: "megaphone", title: "Desenvolvimento de Campanhas" },
  { id: "social", icon: "share-2", title: "Social Media" },
  { id: "branding", icon: "sparkles", title: "Branding" },
  { id: "rebranding", icon: "refresh-cw", title: "Rebranding" },
  { id: "prototipos", icon: "smartphone", title: "Protótipos (UI/UX)" },
  { id: "videos", icon: "video", title: "Edição de Vídeos" },
  { id: "imagens", icon: "image", title: "Edição de Imagens" },
];

export const arthurPricing = [
  { title: "Design Gráfico", price: "R$200 – R$500 por peça" },
  { title: "Social Media", price: "R$1.500 – R$2.500/mês" },
  { title: "Branding", price: "R$800 – R$3.000" },
  { title: "Rebranding", price: "R$1.200 – R$2.500" },
  { title: "Campanhas", price: "R$1.500 – R$3.000" },
  { title: "Protótipos", price: "R$1.500 – R$3.000" },
  { title: "Vídeos Shorts", price: "R$80 – R$150 por peça" },
  { title: "Vídeos YouTube", price: "R$250 – R$450 por vídeo" },
  { title: "Edição de Imagem", price: "R$30 – R$250" },
];

export const arthurPortfolio = [
  { title: "Rebranding Completo", description: "Reformulação total de identidade visual para empresa B2B", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800", tags: ["Branding", "Design Gráfico"] },
  { title: "Campanha de Lançamento", description: "Estratégia integrada para produto digital com foco em conversão", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800", tags: ["Campanhas", "Social Media"] },
  { title: "Interface Mobile", description: "Design de aplicativo financeiro com UX otimizado", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800", tags: ["Protótipos", "UI/UX"] },
  { title: "Gestão de Redes Sociais", description: "Conteúdo visual estratégico para marca de moda", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800", tags: ["Social Media", "Design Gráfico"] },
  { title: "Vídeo Institucional", description: "Produção e edição de conteúdo para YouTube corporativo", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800", tags: ["Vídeo", "Campanhas"] },
  { title: "Identidade Visual Startup", description: "Criação de marca completa para startup de tecnologia", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800", tags: ["Branding", "Design Gráfico"] },
];

// ---------- Partners ----------

export const partners = [
  {
    name: "QRZ Consultorias Industriais",
    logo: "assets/logo-qrz.jpg",
    url: "https://www.qrzconsultorias.com.br/in%C3%ADcio",
    description: "Consultoria industrial especializada, parceira estratégica da FD Consultoria.",
  },
];

// ---------- Contact ----------

export const contactServiceOptions = [
  "Consultoria em TI",
  "Governança de dados e processos",
  "Desenvolvimento de Software",
  "Business Intelligence",
  "Mentoria no desenvolvimento com IA",
  "Outro",
];

export const contactInfo = [
  { icon: "phone", title: "Telefone / WhatsApp", lines: ["(31) 9 9168-4589", "(31) 9 9425-9965"] },
  { icon: "mail", title: "E-mail", lines: ["contato@fdconsultoria.tech", "comercial@fdconsultoria.tech"] },
];
