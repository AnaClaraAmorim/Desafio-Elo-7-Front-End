<script>
  /**
   * Componente para criar uma div com um texto e um link para navegar para algum componente dentro da página ou algum
   * link exterior a pagina
   *        text, texto descrevendo algo
   *        textLink, texto que aparecerá como link dentro do componente Separator
   *        navigate,  link que ao clicar navegará até ele
   *        scroll, define se o navigate será para dar scroll dentro da página ou não, por padrão é true
   *
   *  @example
   *      navigate = "vagas" navegará para um componente dentro da página
   *
   *      navigate = "/saibaMais" deseja navegar para um link externo então deve passar o scroll como false também
   *      scroll = false
   * @component
   *
   *
   */
  import Separator from "./Separator.svelte";

  export let text;
  export let textLink;
  export let navigate;
  export let scroll = true;
</script>

<div class="information">
  <p>{text}</p>
  <Separator {textLink} {navigate} {scroll} />
</div>

<style>
  .information {
    padding: 50px 100px;
    text-align: center;
    color: var(--grey-text);
  }

  @media (max-width: 800px) {
    .information {
      padding: 20px 30px;
    }
  }
</style>
