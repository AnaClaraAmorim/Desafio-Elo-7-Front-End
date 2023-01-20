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
</script>


<Menu {navItems} img = "../images/logo-amarelo.png" alt = "Logo elo 7 escrito em amarelo"></Menu>
<Banner title = "Trabalhe no elo7" image = '../images/foto-header.png' height = '100vh'/>
<Information 
text = "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
textLink = "Vagas em aberto >>"
navigate= 'vagas'/>
<Squad></Squad>
<Culture></Culture>
<Banner title='' image = '../images/foto-bottom.png' height = '50vh' margin='80px'></Banner>
<Jobs></Jobs>
<Footer image = '../images/logo.png' alt= "logo elo 7 com fundo amarelo e texto em branco"></Footer>

<style>
  :global(:root){
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
