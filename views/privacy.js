export function renderPrivacy(container) {
  container.innerHTML = `
    <div class="page-body">
      <div class="page-header">
        <div class="page-header-dots"></div>
        <div class="page-header-inner">
          <span class="eyebrow">TRANSPARÊNCIA</span>
          <h1>Política de Privacidade e Cookies</h1>
          <p>Como a FD Consultoria coleta, usa e protege seus dados pessoais</p>
        </div>
      </div>

      <div class="page-wrap">
        <div class="legal-doc">
          <p class="legal-updated">Última atualização: 08/09/2026</p>

          <h2>1. Quem somos</h2>
          <p>
            Esta política se aplica ao site da <strong>FD Consultoria em Tecnologia da Informação</strong>
            (CNPJ 55.235.715/0001-15), com sede na Rua Aspásia, 431 s. 302 - Caiçara, Belo Horizonte – MG,
            30720-570. Para qualquer assunto relacionado a esta política ou aos seus dados pessoais, fale
            conosco pelo e-mail <a href="mailto:contato@fdconsultoria.tech">contato@fdconsultoria.tech</a>.
          </p>

          <h2>2. Quais dados coletamos e por quê</h2>
          <p>Coletamos dados pessoais apenas quando você os fornece voluntariamente, através de:</p>
          <ul>
            <li><strong>Formulário de Contato:</strong> nome, e-mail, telefone, empresa, cidade/UF, serviço de interesse e sua mensagem — usados para responder à sua solicitação e, quando aplicável, elaborar uma proposta comercial.</li>
            <li><strong>Cadastro na Base de Conhecimento:</strong> nome, e-mail e cidade/UF — usados para liberar o acesso gratuito ao conteúdo técnico.</li>
            <li><strong>Formulário de Marketing/Orçamento:</strong> nome, empresa, serviços de interesse e mensagem — usados para elaborar um orçamento personalizado.</li>
          </ul>
          <p>Não coletamos dados sensíveis (saúde, origem racial, opinião política, etc.) através destes formulários.</p>

          <h2>3. Com quem compartilhamos seus dados</h2>
          <p>Não vendemos nem compartilhamos seus dados para fins de publicidade de terceiros. Usamos os seguintes prestadores de serviço para operar o site:</p>
          <table>
            <thead>
              <tr><th>Prestador</th><th>Finalidade</th><th>Dado envolvido</th></tr>
            </thead>
            <tbody>
              <tr><td>Vercel Inc.</td><td>Hospedagem do site e das funções de envio de e-mail</td><td>Dados de acesso técnico ao site</td></tr>
              <tr><td>Provedor de e-mail (SMTP) da FD Consultoria</td><td>Entrega das mensagens enviadas pelos formulários</td><td>Todos os dados do formulário preenchido</td></tr>
              <tr><td>Anthropic (API de IA)</td><td>Geração automática de um rascunho de resposta ao contato, revisado por um humano da FD antes de qualquer envio</td><td>Nome, empresa, cidade/UF, serviço de interesse e o texto da sua mensagem</td></tr>
            </tbody>
          </table>
          <p>
            O envio de dados à Anthropic (empresa sediada nos Estados Unidos) configura uma transferência
            internacional de dados. Essa transferência ocorre apenas para viabilizar a geração do rascunho de
            resposta interno da FD Consultoria e segue as salvaguardas contratuais oferecidas pelo fornecedor,
            conforme previsto no Art. 33 da LGPD.
          </p>

          <h2>4. Cookies e tecnologias de armazenamento</h2>
          <p>
            Hoje o site <strong>não utiliza cookies de rastreamento, analíticos ou de publicidade</strong>.
            Usamos apenas armazenamento técnico estritamente necessário ao funcionamento do site, listado abaixo:
          </p>
          <table>
            <thead>
              <tr><th>Categoria</th><th>Finalidade</th><th>Situação atual</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Estritamente necessários</td>
                <td>Lembrar que você já viu o aviso de cookies deste site (armazenado no seu navegador, nunca compartilhado conosco)</td>
                <td><span class="status-pill off">Em uso</span></td>
              </tr>
              <tr>
                <td>Desempenho / Estatísticos</td>
                <td>Métricas de uso do site (ex.: Google Analytics)</td>
                <td><span class="status-pill off">Não utilizado</span></td>
              </tr>
              <tr>
                <td>Funcionais</td>
                <td>Lembrar preferências de navegação (ex.: idioma)</td>
                <td><span class="status-pill off">Não utilizado</span></td>
              </tr>
              <tr>
                <td>Marketing / Publicidade</td>
                <td>Anúncios direcionados (ex.: Facebook Pixel, Google Ads)</td>
                <td><span class="status-pill off">Não utilizado</span></td>
              </tr>
            </tbody>
          </table>
          <p>
            Se no futuro passarmos a usar cookies analíticos ou de marketing, esta política e o aviso exibido
            no site serão atualizados antes da ativação, e você poderá escolher quais categorias aceitar.
          </p>

          <h2>5. Base legal para o tratamento</h2>
          <p>Tratamos seus dados com base nas seguintes hipóteses legais da LGPD (Art. 7º):</p>
          <ul>
            <li><strong>Consentimento:</strong> ao preencher e enviar um de nossos formulários.</li>
            <li><strong>Legítimo interesse:</strong> para responder ao contato que você mesmo iniciou.</li>
            <li><strong>Cumprimento de obrigação legal ou regulatória:</strong> quando aplicável.</li>
          </ul>

          <h2>6. Por quanto tempo guardamos seus dados</h2>
          <p>
            Guardamos os dados enviados pelos formulários pelo tempo necessário para atender à sua
            solicitação e manter um histórico comercial razoável, ou até que você solicite a exclusão,
            conforme o item 7 abaixo.
          </p>

          <h2>7. Seus direitos como titular dos dados</h2>
          <p>Nos termos do Art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
          <ul>
            <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Eliminação dos dados tratados com base no seu consentimento;</li>
            <li>Revogação do consentimento a qualquer momento.</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, envie um e-mail para
            <a href="mailto:contato@fdconsultoria.tech"> contato@fdconsultoria.tech</a>.
          </p>

          <h2>8. Segurança</h2>
          <p>
            O site é servido exclusivamente via HTTPS/TLS e os formulários são enviados por conexão SMTP
            autenticada. Adotamos medidas técnicas razoáveis para proteger seus dados contra acesso não
            autorizado, perda ou alteração.
          </p>

          <h2>9. Alterações desta política</h2>
          <p>
            Podemos atualizar esta política periodicamente para refletir mudanças no site ou na legislação.
            A data no topo desta página indica a versão mais recente.
          </p>

          <h2>10. Fale conosco</h2>
          <p>
            Dúvidas sobre esta política ou sobre o tratamento dos seus dados? Escreva para
            <a href="mailto:contato@fdconsultoria.tech"> contato@fdconsultoria.tech</a> ou visite nossa
            <a href="#/contato">página de contato</a>.
          </p>
        </div>
      </div>
    </div>
  `;
}
