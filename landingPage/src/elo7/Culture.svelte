<script>
  /**
   * Componente para exibir a cultura/vantagens da empresa, no estilo imagem, titulo, texto e com um link para mais detalhes.
   *  Recebe um vetor de objetos e itera por esse vetor, com as propriedades: image, altImage,title,description.
   *  Recebe a variavel navigate que indica o caminho que irá navegar ao clicar no link do componente Separator
   *  @component
   * @example
   * const cultures = [
   *   {
   *    image: "../images/qualidade.png",
   *    altImage: "emote de carinha feliz sorrindo em branco com fundo amrelo",
   *    title: "Qualidade de vida",
   *   description:
   *     "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
   * }
   * ];
   *
   */
  import ImageTitleDescription from "../UI/ImageTitleDescription.svelte";
  import Separator from "../UI/Separator.svelte";
  import { scrollRef } from "svelte-scrolling";
  /**
   * @type {cultures}
   */
  export let cultures = [];
  export let navigate = "";
  
</script>

<div style="padding: 50px 0;" use:scrollRef={"cultura"}>
  <div class="culture">
    {#each cultures as culture}
      <ImageTitleDescription {...culture} />
    {/each}
  </div>
  <Separator textLink="Saiba Mais >>" {navigate} scroll="false" />
</div>

<style>
  .culture {
    display: flex;
    padding: 0px 20px;
  }

  @media (max-width: 800px) {
    .culture {
      flex-direction: column;
    }
  }
</style>
