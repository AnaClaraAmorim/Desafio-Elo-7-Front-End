<script>
  export let textLink;
  export let navigate;

  textLink = textLink.toUpperCase();
</script>

<div class="separator">
  <hr class="line" />
  <a class="link" href={navigate}>{textLink}</a>
</div>

<style>
  .separator{
    text-align: center;
  }
  .line {
    width: 15vw;
    height: 2px;
    text-align: center;
    border: 0px;
    color: rgb(204, 203, 203);
    background: rgb(204, 203, 203);
  }

  .link {
    color: #008d8c;
    font-weight: bold;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 800px) {
    .separator {
      width: 80%;
    }
  }
</style>
