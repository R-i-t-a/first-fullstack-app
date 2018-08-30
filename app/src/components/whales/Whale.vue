<template>
  <article>
      <router-link :to="`/whales/${whale.id}`">
        <h3> {{ whale.species }} </h3>
      </router-link>
  </article>
</template>

<script>
export default {
  props: {
    whale: Object
  }
};
</script>

<style>

</style>
