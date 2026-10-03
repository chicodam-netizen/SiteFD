import { icon } from "../icons.js";

export function renderAbout(container) {
  container.innerHTML = `
    <div class="page-body">
      <div class="page-header">
        <div class="page-header-dots"></div>
        <div class="page-header-inner">
          <span class="eyebrow">NOSSA HISTÓRIA</span>
          <h1>Quem Somos</h1>
          <p>Tecnologia, dados e IA a serviço de resultados reais para o seu negócio</p>
        </div>
      </div>

      <div class="page-wrap">
        <p class="about-intro">
          Há mais de 20 anos no mercado, a FD Consultoria nasceu para ajudar empresas de todos os portes a
          transformar tecnologia em resultado. Unimos governança de dados, nuvem e desenvolvimento de
          software potencializado por IA para entregar soluções sob medida, com agilidade e segurança.
        </p>

        <div class="ceo-section">
          <div class="ceo-photo-frame">
            <img src="assets/francisco-damasio.jpg" alt="Francisco Damásio" />
          </div>
          <div class="ceo-info">
            <span class="ceo-badge">CEO</span>
            <h3><a href="https://www.linkedin.com/in/chicodam" target="_blank" rel="noopener noreferrer">Francisco Damásio ${icon("linkedin")}</a></h3>
            <p class="ceo-role">Fundador e CEO da FD Consultoria</p>
            <p>
              Francisco Damásio é fundador e CEO da FD Consultoria. Com mais de 20 anos de mercado em
              Tecnologia da Informação, lidera a empresa à frente de projetos de Governança de Dados e
              Desenvolvimento de Software potencializado por IA. É entusiasta de metodologias
              modernas de desenvolvimento, como a abordagem Spec Driven DevOps, e acredita que a combinação
              entre expertise técnica e inteligência artificial é o caminho para entregar soluções mais
              ágeis e confiáveis aos clientes da FD Consultoria.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
