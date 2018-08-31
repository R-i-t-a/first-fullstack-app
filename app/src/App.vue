<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/whales">Whales</router-link> 
      </nav>
    </header>

    <main>
      <router-view :oceans="oceans"></router-view>
    </main>
  </div>
</template>

<script>

import api from './services/api';

export default {
  data() {
    return {
      oceans: null
    };
  },
  created() {
    api.getOceans()
      .then(oceans => {
        this.oceans = oceans;
      });
  },
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: rgb(199, 237, 237);
}

ul {
  list-style-type: none;
}
</style>
