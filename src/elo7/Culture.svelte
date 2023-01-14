<script>
    import ImageTitleDescription from "../UI/ImageTitleDescription.svelte";
    import Separator from "../UI/Separator.svelte";
    let cultures = [
        {
            image: '../images/qualidade.png',
            altImage: "emote de carinha feliz sorrindo em branco com fundo amrelo",
            title: "Qualidade de vida",
            description: 'Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.'
        },
        {
            image: '../images/descontracao.png',
            altImage: "emote de mão fazendo simbolo de rock and roll em branco com fundo amrelo",
            title: "Ambiente descontraído",
            description: 'Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.'
        },
        {
            image: '../images/atividades.png',
            altImage: "emote de paleta de tinta em branco com fundo amrelo",
            title: "Atividades extras",
            description: 'Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.'
        },
        
    ]
</script>

<div style="padding: 20px 0;">
    <div class="culture">
    {#each cultures as culture}
    <ImageTitleDescription {...culture}></ImageTitleDescription>
        {/each}
    </div>
    <Separator textLink = "Saiba Mais >>" navigate = "/saibaMais" scroll = false/>
</div>


<style>
    .culture{
        display: flex;
        padding: 0px 20px;
    }

    @media(max-width:800px){
        .culture{
            flex-direction: column;
        }
    }
</style>

