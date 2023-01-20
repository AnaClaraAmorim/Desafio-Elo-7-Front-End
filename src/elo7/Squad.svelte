<script>
  import SquarePictue from "../UI/SquarePictue.svelte";
  import { scrollRef } from 'svelte-scrolling'

  let squad = [
    {
      src: "../images/camila.png",
      alt: "Imagem em preto e branco da funcionária Camila",
    },
    {
      src: "../images/guto.png",
      alt: "Imagem em preto e branco do funcionário Guto",
    },
    {
      src: "../images/david.png",
      alt: "Imagem em preto e branco do funcionário David",
    },
    {
      src: "../images/beatriz.png",
      alt: "Imagem em preto e branco da funcionária Beatriz",
    },
  ];
</script>

<div class="company" use:scrollRef={'time'}>
  <div class="ceo">
    <div class="video">
      <img width="100%" alt="video ceo" src="../images/placeholder-video.png" />
    </div>
    <div class="text">
      <h1 class="title">PALAVRA DO CEO</h1>
      <h2 class="name">Carlos Cuioni</h2>
      <p class="information">
        Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
        tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
        venian, quis nostrun exercitationen ullan corporis suscipit laboriosan,
        nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillun dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
        officia deserunt nollit anin id est laborun.
      </p>
    </div>
  </div>
  <div class="squad">
    <h1 class="title">CONHEÇA NOSSO TIME <br /> FORA DE SÉRIE</h1>
    <div class="pictures">
      {#each squad as person}
        <SquarePictue  src={person.src} alt={person.alt} />
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
    .title{
      font-size: 30px;
    }
    .name{
      font-size: 25px;
    }
    .video{
      width: 50%;
     
    }
    .text{
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
      text-align: justify;
      padding-left: 0px;
      width: 100%;
    }

    .video {
      width: 100%;
    }

    
    .pictures{
        flex-direction: column;
    }
  }
</style>
