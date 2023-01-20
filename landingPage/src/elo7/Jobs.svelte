<script>
  /**
   * Componente para exibir as vagas disponíveis na empresa, faz uma requisição fetch em uma API, faz o tratamento dos dados:
   *        Verfica se vaga está ativa
   *        Caso a localização não esteja sendo mostrada na vaga exibi vaga como remota
   *        Caso retorne um vetor vazio exibi mensagem de "Não há vagas disponíveis"
   *        Caso tenha algum problema e não consiga fazer requisição na API mostra mensagem de problemas no servidor
   *
   * @component
   *
   */
  import { onMount } from "svelte";
  import { scrollRef } from "svelte-scrolling";

  /**
   * Vetor com a lista de vagas ativas
   *
   * @typedef jobs
   */
  let jobs = [];
  let errorRequest = false;

  /**
   * Função chamada depois que o componente renderiza para o DOM, chama a função que faz a requisição fetch para a API
   */
  onMount(async function () {
    fetchData();
  });

  /**
   * Função que faz a requisição fetch para a API
   *  Em caso de sucesso na requisição chama a função filterData que fará o tratamento dos dados
   *  Em caso de falha seta variável errorRequest para true
   */
  function fetchData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b", requestOptions)
      .then((response) => response.json())
      .then((result) => (jobs = filterData(result)))
      .catch((error) => (errorRequest = true));
  }
</script>

<script context="module">
  /**
   *  Função que trata os dados recebidos da API
   *   Verifica vagas ativas e monta parâmetro localizacaoFinal
   *    @param resposJson
   *    @returns {jobs} vetor com a lista de vagas
   */
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
