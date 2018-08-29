<template>
  <section>
   <h2>Whales</h2> 
    <p v-if="!whales">Loading whales...</p>
    <ul v-else class="list">
        <Whale
        v-for="(whale, index) in whales"
          :key="index"
          :whale="whale"
        />
    </ul>
   <AddWhale :on-add="handleAdd"/>
  </section> 
</template>

<script>
import Whale from './Whale.vue';
import AddWhale from './AddWhale.vue';
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
        console.log('whales');
        this.whales = whales;
      });
  },
  components: {
    Whale,
    AddWhale
  },
  methods: {
    handleAdd(whale) {
      return api.addWhale(whale)
        .then(saved => {
          this.whales.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
