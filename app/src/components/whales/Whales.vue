<template>
  <section>
   <h2>List of Whales</h2> 
    <p v-if="!whales">Loading whales...</p>
    <ul v-else class="list">
      <li
          v-for="whale in whales"
          :key="whale.id">
        <router-link :to="`/whales/${whale.id}`">
          <p class="list">{{whale.species}} - {{whale.ocean}}</p>
        </router-link>
      </li>
    </ul>
    <p class="add-whale">
      <router-link to="/whales/add">Add a new whale</router-link>
    </p>
  </section> 
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      whales: null
    };
  },
  created() {
    api.getWhales()
      .then(whales => {
        console.log('whales', whales);
        this.whales = whales;
      });
  }
};


</script>

<style>
img {
  width: 600px;
}

.list {
  padding-bottom: 20px;
  color: black;
  font-size: 1.5em;
}

.list:hover {
  color:blue;
}

.add-whale {
  padding-bottom: 20px;
  color: black;
  font-size: 1.5em;
}

</style>
