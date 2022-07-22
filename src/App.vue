<template>


  <NavBar />

  <main class="container" style="margin-top: 140px;">
    <router-view />
  </main>


</template>

<style>
  body {
    font-family: Vazirmatn, sans-serif !important;
  }

  #app {
    font-family: Vazirmatn, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    text-decoration: unset;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: unset;
  }

  nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: unset;
  }


  .persianTextStyle {
    direction: rtl;
    text-align: right;
  }


  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 7px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d1cece;
  }
.noselect_text {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
  
</style>


<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    components: {
      NavBar
    },
    data() {
      return {
      }
    },

    mounted() {

      this.$store.dispatch("execReadContactsDbInit").then((resualt) => {
        console.log(resualt);
      })

    },
  }
</script>