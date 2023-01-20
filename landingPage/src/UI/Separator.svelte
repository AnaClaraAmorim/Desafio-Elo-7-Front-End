<script>
  
  /**
   * Cria um separator com um texto, dependendo se a variável scroll é true ou não
   * define se ao clicar no link deve realizar um scroll dentro da própria página
   * ou navegar para outra página. Recebe as seguinte variáveis:
   *      textLink, texto que aparecerá escrito 
   *      navigate, para qual lugar deseja navegar
   *      scroll, se true é porque navigate possui uma referência dentro da página, se false deve navegar para um link externo
   *    
   * @component
   */

  import { scrollTo } from "svelte-scrolling";
  export let textLink;
  export let navigate;
  export let scroll = true;

  textLink = textLink.toUpperCase();
</script>

<div class="separator">
  <hr class="line" />
  {#if scroll == true}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="link" use:scrollTo={{ ref: `${navigate}`, duration: 2000 }}
      >{textLink}</a
    >
  {:else}
    <a class="link" href={navigate}>{textLink}</a>
  {/if}
</div>

<style>
  .separator {
    text-align: center;
  }
  .line {
    width: 15vw;
    height: 2px;
    text-align: center;
    border: 0px;
    color: rgb(204, 203, 203);
    background: rgb(204, 203, 203);
  }

  .link {
    color: var(--blue-link);
    font-weight: bold;
    text-align: center;
    align-self: center;
  }

  .link:hover {
    color: var(--blue-link-hover);
  }

  @media (max-width: 800px) {
    .separator {
      width: 100%;
    }
  }
</style>
