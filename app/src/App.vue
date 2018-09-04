<template>
  <div id="app">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Fresca" rel="stylesheet">
    </head>
    <header>
      <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/whales">Whales</router-link> 
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
  margin-top: 60px;
}

body {
  background-color: rgb(199, 237, 237);
}

ul {
  list-style-type: none;
  margin-left: 0; 
  padding-left: 0;
}

li {
  color: black;
}

h2 {
  font-family: 'Fresca', sans-serif;
  font-size: 5em;
}

h3 {
  font-size: 2.5em;
}

nav {
    margin: 0;
    padding: 30px 10px 0 10px;
    width: 100%;
    background-color: #f1f1f1;
    height: 50px;
}

.link {
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

.link:hover {
    background-color: rgb(199, 237, 237);
}

</style>
