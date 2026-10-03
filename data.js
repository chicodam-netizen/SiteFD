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
  { icon: "cloud", title: "Cloud Computing", desc: "Migração e gestão de ambientes em nuvem (AWS, Azure, GCP) com escalabilidade e alta disponibilidade." },
  { icon: "code-2", title: "Desenvolvimento de Software", desc: "Sistemas personalizados, APIs e automações construídas com apoio de IA, com revisão e homologação de todos os desenvolvimentos com base em nosso amplo conhecimento em gestão de dados e processos e seguindo estritamente as melhores práticas." },
  { icon: "bar-chart-3", title: "Business Intelligence", desc: "Transformação de dados em insights estratégicos com dashboards, relatórios e análise de dados avançada." },
  { icon: "radar", title: "Monitoria de Desenvolvimento com IA", desc: "Acelere seus projetos com o apoio de um especialista. Acompanho o desenvolvimento da sua solução em tempo real, aplicando as melhores práticas, utilizando IA para otimizar código, revisar arquitetura e resolver bugs complexos. Mais agilidade, menos erros e entregas mais rápidas." },
];

export const stats = [
  { icon: "users", value: "200+", label: "Clientes Atendidos" },
  { icon: "award", value: "20+", label: "Anos de Experiência" },
  { icon: "trending-up", value: "98%", label: "Taxa de Satisfação" },
  { icon: "zap", value: "500+", label: "Projetos Entregues" },
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

export const galleryCategories = ["Todos", "Software", "BI & Analytics", "Capacitação", "Cloud", "Consultoria"];

export const mediaItems = [
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Squad de Desenvolvimento", category: "Software", description: "Equipe ágil desenvolvendo sistemas customizados para automação de processos." },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Dashboard de Business Intelligence", category: "BI & Analytics", description: "Plataforma de BI com visualização de dados em tempo real para tomada de decisões." },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Treinamento de Equipes", category: "Capacitação", description: "Workshop de segurança da informação e boas práticas de TI para equipes corporativas." },
  { id: 7, type: "image", src: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Migração para Cloud", category: "Cloud", description: "Projeto de migração completa para ambiente multi-cloud com zero downtime." },
  { id: 8, type: "image", src: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Transformação Digital", category: "Consultoria", description: "Roadmap de transformação digital para empresa do setor varejista." },
];

// ---------- Knowledge Base ----------

export const kbCategories = [
  { label: "Todos", icon: "book-open" },
  { label: "Governança de Dados", icon: "database" },
  { label: "Segurança", icon: "shield" },
  { label: "Cloud", icon: "cloud" },
  { label: "Software", icon: "code-2" },
  { label: "BI & Dados", icon: "bar-chart-3" },
];

export const levelColors = {
  "Básico": "#4ade80",
  "Intermediário": "#4a9eff",
  "Avançado": "#00c896",
};

export const articles = [
  { id: 1, title: "Guia Completo de Segurança em Redes Corporativas 2025", category: "Segurança", summary: "As principais ameaças e melhores práticas para proteger sua rede corporativa contra ataques modernos.", content: "## Segurança em Redes Corporativas\n\nA segurança de redes corporativas tornou-se um dos principais desafios para empresas de todos os portes. Com o aumento de ataques de ransomware, phishing e engenharia social, é fundamental ter uma estratégia robusta.\n\n### Principais Ameaças\n\n- **Ransomware**: Sequestro de dados com pedido de resgate\n- **Phishing**: Engano de usuários para obter credenciais\n- **DDoS**: Sobrecarga de servidores para derrubar serviços\n- **Insider Threats**: Ameaças internas de funcionários\n\n### Boas Práticas\n\n1. Implemente autenticação multifator (MFA) em todos os sistemas\n2. Mantenha todos os sistemas e softwares atualizados\n3. Realize backups regulares e teste a recuperação\n4. Treine sua equipe continuamente sobre segurança\n5. Use segmentação de rede para limitar o impacto de brechas", author: "Fernando Duarte", readTime: "8 min", date: "05/04/2026", tags: ["Firewall", "VPN", "Zero Trust", "MFA"], featured: true, level: "Intermediário" },
  { id: 2, title: "Migração para Cloud: Planejamento e Execução", category: "Cloud", summary: "Um guia passo a passo para migrar sua infraestrutura para a nuvem com segurança e sem interrupções.", content: "## Migração para Cloud\n\nA migração para a nuvem é uma das iniciativas mais impactantes na transformação digital das empresas. Quando bem executada, traz redução de custos, escalabilidade e maior agilidade.\n\n### Estratégias de Migração (6R's)\n\n- **Rehosting (Lift & Shift)**: Mover VMs para cloud sem alteração\n- **Replatforming**: Pequenas otimizações durante a migração\n- **Refactoring**: Redesenhar aplicações para cloud-native\n- **Repurchasing**: Substituir por SaaS\n- **Retiring**: Desativar sistemas desnecessários\n- **Retaining**: Manter on-premise quando necessário", author: "Ana Paula Ferreira", readTime: "12 min", date: "28/03/2026", tags: ["AWS", "Azure", "GCP", "Migração"], featured: true, level: "Avançado" },
  { id: 3, title: "LGPD na Prática: O que sua empresa precisa saber", category: "Governança de Dados", summary: "Os 10 princípios, os papéis e as categorias de dados da Lei Geral de Proteção de Dados, direto da fonte oficial.", content: "## LGPD na Prática\n\nA Lei Geral de Proteção de Dados (Lei 13.709/2018) trouxe novas obrigações para empresas que processam dados pessoais de cidadãos brasileiros. Com base na publicação oficial do Governo Federal sobre a lei, organizamos abaixo os pontos essenciais para quem está começando a jornada de adequação.\n\n### Os 10 Princípios da LGPD (Art. 6º)\n\n- **Finalidade**: tratar dados apenas para propósitos legítimos e informados\n- **Adequação**: compatibilidade do tratamento com a finalidade informada\n- **Necessidade**: coletar o mínimo de dados possível para o objetivo\n- **Livre acesso**: garantir ao titular consulta facilitada sobre seus dados\n- **Qualidade dos dados**: manter dados exatos, claros e atualizados\n- **Transparência**: informações claras sobre o tratamento realizado\n- **Segurança**: medidas técnicas e administrativas de proteção\n- **Prevenção**: antecipar-se a possíveis danos\n- **Não discriminação**: vedado o tratamento para fins discriminatórios\n- **Responsabilização e prestação de contas**: demonstrar a adoção de medidas eficazes\n\n### Quem é Quem na LGPD\n\n- **Controlador**: quem decide como e por que os dados são tratados\n- **Operador**: executa o tratamento em nome do controlador\n- **Encarregado (DPO)**: canal de comunicação entre controlador, titulares e a ANPD\n- **ANPD**: Autoridade Nacional de Proteção de Dados, órgão fiscalizador federal\n- **Titular**: a pessoa física a quem os dados pertencem\n\n### Categorias de Dados\n\n- **Dados pessoais**: informações que identificam direta ou indiretamente uma pessoa (nome, CPF, e-mail, endereço)\n- **Dados sensíveis**: origem racial/étnica, convicção religiosa, opinião política, dado genético, biométrico, de saúde ou vida sexual — exigem proteção reforçada\n- **Dados anonimizados**: dados sem possibilidade de reidentificação, aos quais a LGPD deixa de se aplicar\n\n### Principais Obrigações Práticas\n\n- Nomear um Encarregado (DPO)\n- Mapear todos os dados pessoais tratados, incluindo sua base legal\n- Obter consentimento explícito para coleta, quando essa for a base legal aplicável\n- Implementar medidas técnicas e administrativas de segurança\n- Reportar incidentes de segurança à ANPD", author: "Carlos Mendes", readTime: "10 min", date: "20/03/2026", tags: ["LGPD", "Privacidade", "Compliance", "DPO", "ANPD"], featured: true, level: "Básico" },
  { id: 4, title: "Kubernetes: Orquestração de Containers para Produção", category: "Software", summary: "Como implementar e gerenciar clusters Kubernetes em ambientes de produção com alta disponibilidade.", content: "## Kubernetes em Produção\n\nO Kubernetes (K8s) é o padrão de fato para orquestração de containers. Sua adoção permite deployments mais rápidos, escalabilidade automática e alta resiliência.\n\n### Componentes Principais\n\n- **Control Plane**: API Server, etcd, Scheduler, Controller Manager\n- **Worker Nodes**: Kubelet, Kube-proxy, Container Runtime\n- **Pods**: Menor unidade deployável\n- **Services**: Abstração de rede para pods", author: "Roberto Silva", readTime: "15 min", date: "15/03/2026", tags: ["Kubernetes", "Docker", "DevOps", "Containers"], level: "Avançado" },
  { id: 9, title: "Desenvolvimento de Software com IA: Velocidade sem Abrir Mão da Governança", category: "Software", summary: "Como unimos as ferramentas mais atuais de IA generativa ao nosso amplo conhecimento em gestão de dados e processos para entregar sistemas sob medida mais rápido e com mais qualidade.", content: "## Desenvolvimento de Software Potencializado por IA\n\nNa FD Consultoria, unimos as ferramentas mais atuais de Inteligência Artificial ao nosso amplo conhecimento em gestão de dados e processos para entregar sistemas sob medida com mais velocidade, qualidade e segurança.\n\n### Como a IA acelera o desenvolvimento\n\n- **Geração assistida de código**: copilots de IA reduzem o tempo gasto com código repetitivo e testes, liberando a equipe para decisões de arquitetura e regras de negócio\n- **Revisão automatizada**: análise contínua identifica riscos de segurança, bugs e más práticas antes de ir para produção\n- **Documentação viva**: a documentação técnica é atualizada junto com o código, reduzindo desalinhamento entre times\n- **Automação de processos**: fluxos repetitivos do negócio (aprovações, integrações entre sistemas, geração de relatórios) são automatizados com agentes de IA conectados diretamente aos seus dados\n\n### O diferencial: dados e processos bem estruturados\n\nFerramentas de IA só entregam valor real quando os dados que as alimentam são confiáveis. É aí que entra nossa experiência em Governança de Dados, arquitetura Medallion/Lakehouse e mapeamento de processos: modelamos a base de dados e os fluxos de negócio antes de automatizar, evitando que a IA amplifique dados inconsistentes ou processos mal desenhados.\n\n### Onde aplicamos essa combinação\n\n1. Sistemas sob medida com funcionalidades de IA embutidas, como busca inteligente, geração de relatórios e assistentes internos\n2. Integrações e APIs que conectam sistemas legados a novas plataformas com apoio de IA\n3. Automação de processos empresariais de ponta a ponta, do dado bruto até a decisão\n\nSe sua empresa quer sair na frente unindo IA, dados bem governados e software sob medida, fale com nossa equipe.", author: "Roberto Silva", readTime: "9 min", date: "01/09/2026", tags: ["IA Generativa", "Engenharia de Software", "Governança de Dados", "Automação"], featured: true, level: "Intermediário" },
  { id: 6, title: "Power BI: Da Dados à Decisão em Minutos", category: "BI & Dados", summary: "Aprenda a criar dashboards impactantes com Power BI para apoiar a tomada de decisão executiva.", content: "## Power BI para Gestão\n\nO Microsoft Power BI transformou a forma como empresas visualizam e analisam dados. Com ele, é possível criar relatórios interativos em poucos minutos.\n\n### Recursos Principais\n\n- **Power Query**: Transformação e limpeza de dados\n- **DAX**: Linguagem de medidas e cálculos\n- **Visuais Interativos**: Gráficos, mapas, tabelas dinâmicas\n- **Power BI Service**: Publicação e compartilhamento na nuvem", author: "Marcos Oliveira", readTime: "9 min", date: "01/03/2026", tags: ["Power BI", "DAX", "Dashboard", "Microsoft"], level: "Básico" },
  { id: 7, title: "Zero Trust: A Nova Arquitetura de Segurança", category: "Segurança", summary: "Entenda o modelo Zero Trust e como implementá-lo progressivamente em sua organização.", content: "## Zero Trust Architecture\n\nO modelo Zero Trust parte do princípio \"nunca confie, sempre verifique\". É a evolução natural da segurança perimetral tradicional.\n\n### Princípios Fundamentais\n\n- Verificar explicitamente sempre\n- Usar acesso com menor privilégio\n- Assumir que haverá violações\n- Microsegmentação de rede\n- Monitoramento contínuo", author: "Fernando Duarte", readTime: "11 min", date: "22/02/2026", tags: ["Zero Trust", "IAM", "MFA", "SASE"], level: "Avançado" },
  { id: 8, title: "DevOps e CI/CD: Acelerando Entregas com Qualidade", category: "Software", summary: "Como estruturar pipelines de CI/CD e adotar práticas DevOps para entregas mais rápidas e confiáveis.", content: "## DevOps e CI/CD\n\nDevOps é uma cultura que une desenvolvimento e operações para entregar software com mais velocidade e qualidade.\n\n### Pipeline CI/CD\n\n- **CI (Continuous Integration)**: Integração frequente de código\n- **CD (Continuous Delivery)**: Deploy automatizado e confiável\n- **Ferramentas**: Jenkins, GitHub Actions, GitLab CI, Azure DevOps", author: "Roberto Silva", readTime: "13 min", date: "15/02/2026", tags: ["DevOps", "CI/CD", "Jenkins", "GitHub Actions"], level: "Intermediário" },
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

// ---------- Contact ----------

export const contactServiceOptions = [
  "Consultoria em TI",
  "Segurança da Informação",
  "Cloud Computing",
  "Desenvolvimento de Software",
  "Business Intelligence",
  "Suporte Técnico",
  "Outro",
];

export const contactInfo = [
  { icon: "phone", title: "Telefone / WhatsApp", lines: ["(31) 9 9168-4589", "(31) 9 9425-9965"] },
  { icon: "mail", title: "E-mail", lines: ["contato@fdconsultoria.tech", "comercial@fdconsultoria.tech"] },
];
