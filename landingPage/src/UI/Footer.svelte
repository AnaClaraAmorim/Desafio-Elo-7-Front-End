<script>
   /**
   * Componente para criar um footer
   *       image, logo que aparecerá a esquerda do footer
   *       alt, descrição do logo
   * @component
   *
   */
  export let image;
  export let alt;
  let year = new Date().getFullYear();
</script>

<div class="footer">
  <div class="upFooter">
    <img class="img" src={image} {alt} />
    <div class="social">
      <ul class="list">
        <li class="social-item">
          <a
            rel="external noreferrer"
            class="blog"
            href="https://blog.elo7.com.br/"
            title="Blog"
            target="_blank">Blog</a
          >
        </li>
        <li class="social-item">
          <a
            rel="external noreferrer"
            class="facebook"
            href="https://web.facebook.com/Elo7br?_rdc=1&_rdr"
            title="Facebook"
            target="_blank">Facebook</a
          >
        </li>
        <li class="social-item">
          <a
            rel="external noreferrer"
            class="instagram"
            href="https://instagram.com/elo7br"
            title="Instagram"
            target="_blank">Instagram</a
          >
        </li>
        <li class="social-item">
          <a
            rel="external noreferrer"
            class="linkedin"
            href="https://www.linkedin.com/company/elo7/"
            title="Linkedin"
            target="_blank">Instagram</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <ul class="links">
      <li>
        <p style="margin: 0;">© {year} Elo7</p>
      </li>
      <li>
        <a
          rel="external noreferrer"
          href="https://www.elo7.com.br/politicas-elo7/termos-de-uso/"
          title="Termos de uso"
          target="_blank">Termos de uso</a
        >
      </li>
      <li>
        <a
          rel="external noreferrer"
          href="https://www.elo7.com.br/politicas-elo7/politica-de-privacidade/"
          title="Política de privacidade"
          target="_blank"
          >Política de privacidade
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  .footer {
    margin-top: 40px;
    padding: 20px 80px;
    height: auto;
    background-color: var(--color-yellow);
  }

  .upFooter {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .social {
    display: flex;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .img {
    height: 80px;
  }

  ul {
    display: flex;
    list-style: none;
    color: white;
    text-align: center;
    padding: 0;
  }

  .links li {
    float: left;
    padding-right: 0.75em;
  }

  .links li:nth-of-type(n + 2) {
    padding-left: 0.75em;
    border-left: 1px solid white;
  }

  a {
    color: white;
  }

  .social .list {
    display: flex;
  }

  .social-item {
    display: inline-block;
    margin-right: 1em;
    vertical-align: middle;
  }

  .social-item a {
    display: block;
    height: 36px;
    width: 36px;
    text-indent: -9999px;
    overflow: hidden;
  }

  .social-item .instagram {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-instagram.svg);
  }

  .social-item .instagram:hover {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-instagram-hover.svg);
  }

  .social-item .facebook {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-facebook.svg);
  }

  .social-item .facebook:hover {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-facebook-hover.svg);
  }
  .social-item .linkedin {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-linkedin.svg);
  }
  .social-item .linkedin:hover {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-linkedin-hover.svg);
  }

  .social-item .blog {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-blog.svg);
  }

  .social-item .blog:hover {
    background-image: url(//images.elo7.com.br/assets/v3/desktop/svg/footer/ic-blog-hover.svg);
  }

  @media (max-width: 800px) {
    .footer {
      padding: 20px 15px;
    }
  }
</style>
