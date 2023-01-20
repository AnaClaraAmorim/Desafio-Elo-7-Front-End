<script>
   /**
   * Componente para criar uma div com uma imagem, um título e um texto, com a largura de 30vw e margem de 3vw:
   *        image, caminnho da imagem 
   *        altImage, descrição da imagem
   *        title, título 
   *        description, texto que será mostrado
   * @component
   *
   */
  export let image;
  export let altImage;
  export let title;
  export let description;

  title = title.toUpperCase();
</script>

<div class="imageDescription">
  <img class="image" src={image} alt={altImage} />
  <h1 class="title">{title}</h1>
  <p class="text">{description}</p>
</div>

<style>
  .imageDescription {
    width: 30vw;
    margin: 0px 3vw;
    text-align: center;
  }

  .image {
    justify-self: center;
  }

  .title {
    color: var(--grey-title);
  }

  .text {
    text-align: justify;
    color: var(--grey-text);
  }

  @media (max-width: 800px) {
    .imageDescription {
      width: 100%;
      margin: 0px;
    }
  }
</style>
