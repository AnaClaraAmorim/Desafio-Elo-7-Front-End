<script>
  import Separator from "./Separator.svelte";

  export let text;
  export let textLink;
  export let navigate;

</script>

<div class="information">
  <p>{text}</p>
  <Separator {textLink} {navigate} />
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
