<script>
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
    width: 33.3vw;
    margin: 0px 80px;
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
