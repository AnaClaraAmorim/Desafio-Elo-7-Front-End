
<script>
  
  import { onMount } from "svelte";
  import { scrollRef } from 'svelte-scrolling'

  let jobs = [];
  let errorRequest = false;

  onMount(async function () {
    fetchData();
  });

  function fetchData (){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b", requestOptions)
      .then((response) => response.json())
      .then((result) => jobs = filterData(result))
      .catch((error) => errorRequest = true);
  }
</script>

<script context="module">
  export function filterData(responseJson) {
    let jobs = responseJson.vagas;
    if (jobs.lenght == 0) {
      return;
    }
    jobs = jobs.filter((job) => job.ativa === true);

    jobs.forEach((element) => {
      if (element.localizacao === undefined) {
        element.localizacaoFinal = "Remoto";
      } else {
        element.localizacaoFinal =
          element.localizacao.bairro +
          " - " +
          element.localizacao.cidade +
          " - " +
          element.localizacao.pais;
      }
    });

    return jobs;
  }
</script>

<div class="jobs" id="vagas" use:scrollRef={"vagas"}>
  <h1 class="title">VAGAS EM ABERTO</h1>
  <h2 class="group">DESENVOLVIMENTO</h2>
  {#if errorRequest}
    <p>Ops, estamos lidando com erros no servidor no momento!</p>
  {:else if jobs.length != 0}
    {#each jobs as job}
      <div class="listJobs">
        <a class="role" href="/{job.cargo}">{job.cargo}</a>
        <a class="location" href="/{job.cargo}">{job.localizacaoFinal}</a>
      </div>
    {/each}
  {:else}
    <p>
      Não temos vagas disponíveis no momento, mas fique de olho nas nossas redes
      sociais!
    </p>
  {/if}
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

  .role {
    color: var(--blue-link);
    font-weight: bold;
  }

  .role:hover {
    color: var(--blue-link-hover);
  }

  .location:hover {
    color: var(--grey-text-hover);
  }

  .role:hover + .location {
    color: var(--grey-text-hover);
    text-decoration: underline;
  }

  .listJobs:has(.location:hover) .role {
    color: var(--blue-link-hover);
    text-decoration: underline;
  }

  .location {
    color: var(--grey-text);
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0;
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

    .location {
      margin: 0px;
    }
  }
</style>
