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
  background-image:  url("../images/foto-header.png");
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
 
}

.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
}



</style>