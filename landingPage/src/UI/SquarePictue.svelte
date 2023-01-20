<script>
  /**
   * Cria um imagem
   *    Recebe src e alt, que é caminho da imagem e a descrição dessa imagem
   * @component
   */
  export let src;
  export let alt;
</script>

<div class="square-img">
  <img width="100%" {src} {alt} />
</div>

<style>
  .square-img {
    margin: 10px 30px;
    width: 25vw;
  }

  .square-img:nth-child(1) {
    margin-left: 0;
  }

  .square-img:nth-last-child(n) {
    margin-right: 0;
  }

  .square-img:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .square-img {
      margin: 5px 0;
      width: 60vw;
      align-self: center;
    }

    .square-img:nth-child(1) {
      margin-left: 5px 0;
    }

    .square-img:nth-last-child(n) {
      margin-right: 5px 0;
    }
  }
</style>
