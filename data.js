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
  infra: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  meeting: "https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const services = [
  { icon: "database", title: "Consultoria em Governança de Dados", desc: "Soluções personalizadas para apoio ao programa de adequação à LGPD." },
  { icon: "cloud", title: "Cloud Computing", desc: "Migração e gestão de ambientes em nuvem (AWS, Azure, GCP) com escalabilidade e alta disponibilidade." },
  { icon: "network", title: "Infraestrutura de Redes", desc: "Projeto, implantação e gerenciamento de redes corporativas cabeadas e sem fio, garantindo performance e confiabilidade." },
  { icon: "code-2", title: "Desenvolvimento de Software", desc: "Criação de sistemas sob medida, APIs, integrações e automações para otimizar processos empresariais." },
  { icon: "bar-chart-3", title: "Business Intelligence", desc: "Transformação de dados em insights estratégicos com dashboards, relatórios e análise de dados avançada." },
  { icon: "headphones", title: "Suporte e Help Desk", desc: "Atendimento técnico especializado com SLA definido, suporte remoto e on-site para toda sua equipe." },
];

export const stats = [
  { icon: "users", value: "200+", label: "Clientes Atendidos" },
  { icon: "award", value: "20+", label: "Anos de Experiência" },
  { icon: "trending-up", value: "98%", label: "Taxa de Satisfação" },
  { icon: "zap", value: "500+", label: "Projetos Entregues" },
];

export const whyUs = [
  "Equipe certificada nas principais tecnologias do mercado",
  "Atendimento personalizado e suporte dedicado",
  "Metodologia ágil com foco em resultados",
  "Parcerias com os maiores fornecedores de TI do mundo",
  "Soluções escaláveis para empresas de todos os portes",
  "Compromisso com prazos e orçamentos acordados",
];

export const certifications = ["AWS Certified", "Azure Expert", "Cisco Partner", "VMware Certified"];

// ---------- Gallery ----------

export const galleryCategories = ["Todos", "Infraestrutura", "Segurança", "Software", "BI & Analytics", "Capacitação", "Cloud", "Consultoria"];

export const mediaItems = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Data Center Tier III", category: "Infraestrutura", description: "Implementação de data center com alta disponibilidade para cliente do setor financeiro." },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Centro de Operações de Segurança", category: "Segurança", description: "SOC implementado para monitoramento proativo de ameaças cibernéticas." },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1607971422532-73f9d45d7a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Squad de Desenvolvimento", category: "Software", description: "Equipe ágil desenvolvendo sistemas customizados para automação de processos." },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Dashboard de Business Intelligence", category: "BI & Analytics", description: "Plataforma de BI com visualização de dados em tempo real para tomada de decisões." },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Treinamento de Equipes", category: "Capacitação", description: "Workshop de segurança da informação e boas práticas de TI para equipes corporativas." },
  { id: 7, type: "image", src: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Migração para Cloud", category: "Cloud", description: "Projeto de migração completa para ambiente multi-cloud com zero downtime." },
  { id: 8, type: "image", src: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", thumb: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Transformação Digital", category: "Consultoria", description: "Roadmap de transformação digital para empresa do setor varejista." },
  { id: 9, type: "video", src: "", thumb: "https://images.unsplash.com/photo-1681164315990-b2a1e375eb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", title: "Case: Migração de ERP para Cloud", category: "Cloud", description: "Assista ao nosso case de sucesso de migração de ERP para a nuvem com alta disponibilidade.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

// ---------- Knowledge Base ----------

export const kbCategories = [
  { label: "Todos", icon: "book-open" },
  { label: "Segurança", icon: "shield" },
  { label: "Cloud", icon: "cloud" },
  { label: "Redes", icon: "network" },
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
  { id: 3, title: "LGPD na Prática: O que sua empresa precisa saber", category: "Segurança", summary: "Entenda as obrigações da Lei Geral de Proteção de Dados e como adequar seus sistemas.", content: "## LGPD na Prática\n\nA Lei Geral de Proteção de Dados (Lei 13.709/2018) trouxe novas obrigações para empresas que processam dados pessoais de cidadãos brasileiros.\n\n### Principais Obrigações\n\n- Nomear um DPO (Data Protection Officer)\n- Mapear todos os dados pessoais tratados\n- Obter consentimento explícito para coleta\n- Implementar medidas técnicas de segurança\n- Reportar violações em 72 horas", author: "Carlos Mendes", readTime: "10 min", date: "20/03/2026", tags: ["LGPD", "Privacidade", "Compliance", "DPO"], level: "Básico" },
  { id: 4, title: "Kubernetes: Orquestração de Containers para Produção", category: "Software", summary: "Como implementar e gerenciar clusters Kubernetes em ambientes de produção com alta disponibilidade.", content: "## Kubernetes em Produção\n\nO Kubernetes (K8s) é o padrão de fato para orquestração de containers. Sua adoção permite deployments mais rápidos, escalabilidade automática e alta resiliência.\n\n### Componentes Principais\n\n- **Control Plane**: API Server, etcd, Scheduler, Controller Manager\n- **Worker Nodes**: Kubelet, Kube-proxy, Container Runtime\n- **Pods**: Menor unidade deployável\n- **Services**: Abstração de rede para pods", author: "Roberto Silva", readTime: "15 min", date: "15/03/2026", tags: ["Kubernetes", "Docker", "DevOps", "Containers"], level: "Avançado" },
  { id: 5, title: "Redes Wi-Fi Corporativas: Segurança e Performance", category: "Redes", summary: "Boas práticas para implementar redes sem fio seguras e de alta performance em ambientes empresariais.", content: "## Wi-Fi Corporativo\n\nUma rede Wi-Fi corporativa bem configurada é essencial para produtividade e segurança. Saiba como implementar com as melhores práticas.\n\n### Padrões e Protocolos\n\n- **Wi-Fi 6 (802.11ax)**: Maior throughput e menor latência\n- **WPA3**: Protocolo de segurança mais robusto\n- **802.1X**: Autenticação baseada em certificados\n- **RADIUS**: Servidor de autenticação centralizado", author: "Patricia Costa", readTime: "7 min", date: "10/03/2026", tags: ["Wi-Fi", "WPA3", "802.1X", "RADIUS"], level: "Intermediário" },
  { id: 6, title: "Power BI: Da Dados à Decisão em Minutos", category: "BI & Dados", summary: "Aprenda a criar dashboards impactantes com Power BI para apoiar a tomada de decisão executiva.", content: "## Power BI para Gestão\n\nO Microsoft Power BI transformou a forma como empresas visualizam e analisam dados. Com ele, é possível criar relatórios interativos em poucos minutos.\n\n### Recursos Principais\n\n- **Power Query**: Transformação e limpeza de dados\n- **DAX**: Linguagem de medidas e cálculos\n- **Visuais Interativos**: Gráficos, mapas, tabelas dinâmicas\n- **Power BI Service**: Publicação e compartilhamento na nuvem", author: "Marcos Oliveira", readTime: "9 min", date: "01/03/2026", tags: ["Power BI", "DAX", "Dashboard", "Microsoft"], level: "Básico" },
  { id: 7, title: "Zero Trust: A Nova Arquitetura de Segurança", category: "Segurança", summary: "Entenda o modelo Zero Trust e como implementá-lo progressivamente em sua organização.", content: "## Zero Trust Architecture\n\nO modelo Zero Trust parte do princípio \"nunca confie, sempre verifique\". É a evolução natural da segurança perimetral tradicional.\n\n### Princípios Fundamentais\n\n- Verificar explicitamente sempre\n- Usar acesso com menor privilégio\n- Assumir que haverá violações\n- Microsegmentação de rede\n- Monitoramento contínuo", author: "Fernando Duarte", readTime: "11 min", date: "22/02/2026", tags: ["Zero Trust", "IAM", "MFA", "SASE"], level: "Avançado" },
  { id: 8, title: "DevOps e CI/CD: Acelerando Entregas com Qualidade", category: "Software", summary: "Como estruturar pipelines de CI/CD e adotar práticas DevOps para entregas mais rápidas e confiáveis.", content: "## DevOps e CI/CD\n\nDevOps é uma cultura que une desenvolvimento e operações para entregar software com mais velocidade e qualidade.\n\n### Pipeline CI/CD\n\n- **CI (Continuous Integration)**: Integração frequente de código\n- **CD (Continuous Delivery)**: Deploy automatizado e confiável\n- **Ferramentas**: Jenkins, GitHub Actions, GitLab CI, Azure DevOps", author: "Roberto Silva", readTime: "13 min", date: "15/02/2026", tags: ["DevOps", "CI/CD", "Jenkins", "GitHub Actions"], level: "Intermediário" },
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
  "Infraestrutura de Redes",
  "Cloud Computing",
  "Desenvolvimento de Software",
  "Business Intelligence",
  "Suporte Técnico",
  "Outro",
];

export const contactInfo = [
  { icon: "map-pin", title: "Endereço", lines: ["Rua Aspásia, 431 s. 302 - Caiçara", "Belo Horizonte – MG, 30720-570"] },
  { icon: "phone", title: "Telefone", lines: ["(31) 9 9168-4589", "(31) 9 9425-9965"] },
  { icon: "mail", title: "E-mail", lines: ["contato@fdconsultoria.tech", "comercial@fdconsultoria.tech"] },
  { icon: "clock", title: "Horário de Atendimento", lines: ["Segunda a Sexta: 8h às 18h"] },
];
