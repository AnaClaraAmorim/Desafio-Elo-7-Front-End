<script>
  /**
   * Componente para criar um banner, é possível definir algumas variáveis:
   *        title, texto centralizado no meio do banner, caso não passe essa props nenhum texto será exibido
   *        image, caminnho da imagem do banner
   *        height, altura que o banner ocupará na tela
   *        margin, margin lateral do banner, caso não passe nenhum valor a margin será 0
   * @component
   *
   */
  export let title = "";
  export let image;
  export let height;
  export let margin = "0px";
</script>

<div
  class="banner"
  style="--image: url({image}); --height: {height}; --margin : {margin}"
>
  <div class="banner-text">
    <h1 style="font-size:50px">{title}</h1>
  </div>
</div>

<style>
  .banner {
    background-image: var(--image);
    height: var(--height);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px var(--margin);
  }

  .banner-text {
    padding-top: 30vh;
    text-align: center;
    color: white;
  }

  @media (max-width: 800px) {
    .banner {
      margin: 0px;
    }
  }
</style>
