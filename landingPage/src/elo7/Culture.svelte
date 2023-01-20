<script>
  import ImageTitleDescription from "../UI/ImageTitleDescription.svelte";
  import Separator from "../UI/Separator.svelte";
  import { scrollRef } from "svelte-scrolling";

  export let cultures = [];
</script>

<div style="padding: 50px 0;" use:scrollRef={"cultura"}>
  <div class="culture">
    {#each cultures as culture}
      <ImageTitleDescription {...culture} />
    {/each}
  </div>
  <Separator textLink="Saiba Mais >>" navigate="/saibaMais" scroll="false" />
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
