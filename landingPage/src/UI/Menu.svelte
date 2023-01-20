<script>
  import { onMount } from "svelte";
  import { scrollTo, scrollTop, setGlobalOptions } from "svelte-scrolling";

  setGlobalOptions({
    duration: 2000,
  });

  let showMobileMenu = false;

  export let img = "";
  export let alt = "";
  
  export let navItems = [];

  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  const mediaQueryHandler = (e) => {
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 800px)");

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="navbar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={handleMobileIconClick}
      class={`mobile-icon${showMobileMenu ? " close" : ""}`}
    >
      <div class="middle-line" />
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a class="logo" on:click={() => scrollTop()}>
        <img class="img" src={img} {alt} />
      </a>
    </div>
    <div>
      <ul class={`navbar-list${showMobileMenu ? " mobile" : ""}`}>
        {#each navItems as item}
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="link" use:scrollTo={{ ref: `${item.href}}` }}
              >{item.label}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: white;
    height: 45px;
    border-bottom: 2px solid rgb(235, 235, 235);
    position: fixed;
    width: 100vw;
  }

  .img {
    height: 20px;
  }

  .logo {
    margin-right: auto;
    cursor: pointer;
  }

  .navbar {
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.close:before,
  .mobile-icon.close:after,
  .mobile-icon.close .middle-line {
    width: 100%;
  }

  .mobile-icon.close:before,
  .mobile-icon.close:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.close .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    margin: 0;
    padding: 0 40px;
    margin-left: auto;
  }

  .navbar-list.mobile {
    background-color: rgba(555, 555, 555, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
  }

  .navbar-list a {
    color: var(--color-yellow);
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-weight: bold;
  }

  .link:hover {
    color: var(--color-yellow-hover);
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }

  @media (max-width: 767px) {
    .logo {
      width: 0;
      padding-left: 10px;
    }
  }
</style>
