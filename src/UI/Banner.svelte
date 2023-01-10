<script>
  export let title;
</script>

<div class="banner">
  <div class="banner-text">
    <h1 style="font-size:50px">{title}</h1>
  </div>
</div>

<style>
   .banner {
    background-image: url("../images/foto-header.png");
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .banner-text {
    padding-top: 30vh;
    text-align: center;
    color: white;
  }
</style>
