<template>
    <article v-if="whale">
      <h3> DETAILS </h3>
      <p> {{ whale.species }} </p>
      <p> {{ whale.weight }} </p>
      <img :src="whale.url">
    </article>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      whale: null
    };
  },
  created() {
    api.getWhaleDetail(this.$route.params.id)
      .then(whale => {
        console.log('whale');
        this.whale = whale;
      });
  },
};
</script>   

<style>

</style>
