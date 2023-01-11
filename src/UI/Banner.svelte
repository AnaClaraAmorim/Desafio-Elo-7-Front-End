<script>
  export let title = '';
  export let image;
  export let height;
  export let margin = '0px' ;

</script>

<div class="banner" style="--image: url({image}); --height: {height}; --margin : {margin}">
  <div class="banner-text">
    <h1 style="font-size:50px">{title}</h1>
  </div>
</div>

<style>
   .banner {
    background-image: var(--image);
    height: var(--height);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px var(--margin);

  }

  .banner-text {
    padding-top: 30vh;
    text-align: center;
    color: white;
  }
</style>
