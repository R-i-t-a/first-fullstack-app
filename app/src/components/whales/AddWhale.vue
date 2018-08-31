<template>
    <section>
        <h2>Add a new whale!</h2>
        <WhaleForm
            label="Add"
            :oceans="oceans"
            :onEdit="handleAdd"/>
    </section>
</template>

<script>
import WhaleForm from './WhaleForm.vue';
import api from '../../services/api';

export default {
  components: {
    WhaleForm
  },
  props: {
    oceans: Array
  },
  methods: {
    handleAdd(whale) {
      return api.addWhale(whale)
        .then(added => {
          this.$router.push(`/whales/${added.id}`);
        });
    }
  }
};

</script>

<style>

</style>
