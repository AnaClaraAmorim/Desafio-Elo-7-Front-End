<script>
    export let text;
    export let textLink;
    export let navigate;

    textLink = textLink.toUpperCase();

   
</script>


<div class="information">
    <p>{text}</p>
    <hr  class="separator">
    <a class = "link" href={navigate}>{textLink}</a>
</div>


<style>
    .information{
        padding: 20px 100px;
        text-align: center;
        color: rgb(100, 100, 100);
    }

    .separator{
        width: 15vw;
        height:2px;
        text-align:center;
        border:0px;
        color:rgb(204, 203, 203); 
        background:rgb(204, 203, 203); 
    }

    .link{
        color: #008D8C;
        font-weight: bold;
    }

    @media(max-width:800px){
        .information{
            padding: 20px 30px;
        }
        .separator{
            width: 80%;
        }
    }
    
</style>