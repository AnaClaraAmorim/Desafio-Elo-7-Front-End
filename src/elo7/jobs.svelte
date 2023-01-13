<script>
  import { onMount } from "svelte";
  const endpoint = "http://www.mocky.io/v2/5d6fb6b1310000f89166087b";
  let vagas = [];

  onMount(async function () {
    const response = await fetch(endpoint);
    vagas = await response.json();
    vagas = vagas.vagas;
    vagas = vagas.filter((vaga) => vaga.ativa === true);
  });
</script>

<div class="jobs" id="vagas">
  <h1 class="title">VAGAS EM ABERTO</h1>
  <h2 class="group">DESENVOLVIMENTO</h2>
  {#each vagas as vaga}
    <div class="listJobs">
      <p class="role">{vaga.cargo}</p>
      {#if vaga.localizacao === undefined}
      <p class="location">Remoto</p>
      {:else}
      <p class="location">{vaga.localizacao.bairro} - {vaga.localizacao.cidade} - {vaga.localizacao.pais}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .jobs {
    padding: 0 80px;
  }

  .title {
    text-align: center;
    color: var(--grey-title);
  }

  .group {
    color: var(--grey-title);
    margin: 50px 0;
  }

  .listJobs {
    display: flex;
    justify-content: space-between;
  }

  .role{
    color: var(--blue-link);
    font-weight: bold;
  }

  .location{
    color: var(--grey-text);
    font-weight: bold;
  }

  @media (max-width: 800px) {
    .jobs {
        padding: 0px;
        text-align: center;

    }

    .listJobs {
        flex-direction: column;
        margin: 20px 0;
    }

    .location{
        margin: 0px;
    }
  }

</style>
