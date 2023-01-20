<script>
  /**
   * Componente para exibir texto e video do CEO da empresa, e fotos das pessoas que trabalham na empresa.
   * Recebe um vetor de objetos squad e itera por esse vetor, com as propriedades: src e alt.
   * Recebe um objeto ceo com as propriedades: text, name e video.
   * @component
   * @example
   *const squad = [
   *{
   *  src: "../images/jane.png",
   *  alt: "Imagem em preto e branco da funcionária Jane",
   *}
   *];
   *
   *const ceo = {
   *text: ` É bom trabalhar aqui`,
   *name: "Carlos Cuioni",
   *video: "../caminho_video",
   *};
   */
  import SquarePictue from "../UI/SquarePictue.svelte";
  import { scrollRef } from "svelte-scrolling";
  /**
   * @type {squad}
   */
  export let squad = [];
  /**
   * @type {ceo}
   */
  export let ceo = [];
</script>

<div class="company" use:scrollRef={"time"}>
  <div class="ceo">
    <div class="video">
      <img width="100%" alt="video ceo" src={ceo.video} />
    </div>
    <div class="text">
      <h1 class="title">PALAVRA DO CEO</h1>
      <h2 class="name">{ceo.name}</h2>
      <p class="information">
        {ceo.text}
      </p>
    </div>
  </div>
  <div class="squad">
    <h1 class="title">CONHEÇA NOSSO TIME <br /> FORA DE SÉRIE</h1>
    <div class="pictures">
      {#each squad as person}
        <SquarePictue src={person.src} alt={person.alt} />
      {/each}
    </div>
  </div>
</div>

<style>
  .company {
    background-color: var(--grey-background);
    padding: 50px 80px;
  }

  .text {
    text-align: justify;
    padding-left: 80px;
    width: 60%;
  }

  .ceo {
    display: flex;
  }

  .title {
    margin-top: 0;
    color: var(--grey-title);
  }

  .name {
    font-style: italic;
    color: var(--color-yellow);
  }

  .video {
    width: 40%;
    align-self: center;
  }

  .video:hover {
    cursor: pointer;
  }

  .pictures {
    display: flex;
    width: 100%;
  }

  .squad {
    text-align: center;
    padding-top: 20px;
  }

  .information {
    font-size: 22px;
    letter-spacing: 0.5px;
  }
  @media (max-width: 1300px) {
    .information {
      font-size: 15px;
      letter-spacing: 0.5px;
    }
    .title {
      font-size: 30px;
    }
    .name {
      font-size: 25px;
    }
    .video {
      width: 50%;
    }
    .text {
      width: 50%;
    }
  }

  @media (max-width: 800px) {
    .company {
      padding: 20px 10px;
    }

    .ceo {
      flex-direction: column;
    }

    .text {
      text-align: center;
      padding-left: 0px;
      width: 100%;
    }

    .video {
      width: 100%;
    }

    .pictures {
      flex-direction: column;
    }
  }
</style>
