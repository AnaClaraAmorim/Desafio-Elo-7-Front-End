<script>
  import Banner from "./UI/Banner.svelte";
  import Information from "./UI/Information.svelte";
  import Squad from "./elo7/Squad.svelte";
  import Culture from "./elo7/Culture.svelte";
  import Jobs from "./elo7/Jobs.svelte";
  import Footer from "./UI/Footer.svelte";
  import Menu from "./UI/Menu.svelte";

  const navItems = [
    { label: "Nosso time", href: "time" },
    { label: "Cultura", href: "cultura" },
    { label: "Vagas", href: "vagas" },
  ];

  const squad = [
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

  const ceo = {
    text: ` Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
        tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
        venian, quis nostrun exercitationen ullan corporis suscipit laboriosan,
        nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillun dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
        officia deserunt nollit anin id est laborun.`,
    name: "Carlos Cuioni",
    video: "../images/placeholder-video.png",
  };

  const cultures = [
    {
      image: "../images/qualidade.png",
      altImage: "emote de carinha feliz sorrindo em branco com fundo amrelo",
      title: "Qualidade de vida",
      description:
        "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    },
    {
      image: "../images/descontracao.png",
      altImage:
        "emote de mão fazendo simbolo de rock and roll em branco com fundo amrelo",
      title: "Ambiente descontraído",
      description:
        "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    },
    {
      image: "../images/atividades.png",
      altImage: "emote de paleta de tinta em branco com fundo amrelo",
      title: "Atividades extras",
      description:
        "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    },
  ];
</script>

<Menu
  {navItems}
  img="../images/logo-amarelo.png"
  alt="Logo elo 7 escrito em amarelo"
/>
<Banner
  title="Trabalhe no elo7"
  image="../images/foto-header.png"
  height="100vh"
/>
<Information
  text="Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
  textLink="Vagas em aberto >>"
  navigate="vagas"
/>
<Squad {squad} {ceo} />
<Culture {cultures} />
<Banner
  title=""
  image="../images/foto-bottom.png"
  height="50vh"
  margin="80px"
/>
<Jobs />
<Footer
  image="../images/logo.png"
  alt="logo elo 7 com fundo amarelo e texto em branco"
/>

<style>
  :global(:root) {
    --color-yellow: #fdb933;
    --color-yellow-hover: #c99837;
    --grey-title: rgb(100, 100, 100);
    --grey-text: rgb(133, 133, 133);
    --grey-text-hover: rgb(102, 102, 102);
    --grey-background: #f0efef;
    --blue-link: #008d8c;
    --blue-link-hover: #016b6b;
  }
</style>
