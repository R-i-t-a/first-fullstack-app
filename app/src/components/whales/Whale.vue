<template>
  <article>
      <h3> {{ whale.species }} </h3>
      <p> {{ whale.weight }} </p>
  </article>
</template>

<script>
export default {
  props: ['whale']
};
</script>

<style>

</style>
