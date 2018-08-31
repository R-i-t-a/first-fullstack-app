<template id="whale-template">
  <div v-if="whale">
    <article v-if="!editing">
      <h3>{{ whale.species }}</h3>
      <p v-if="whale.ocean">Ocean: {{ whale.ocean }}</p>
      <p> Weight: {{ whale.weight }} </p>
      <img :src="whale.url">
      <p>
        <button @click="handleRemove">Remove this whale.</button>
      </p>
    </article>
    <WhaleForm
      v-else
      label="Update"
      :whale="whale"
      :oceans="oceans"
      :onEdit="handleUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'Edit'}}</button>
  </div>
</template>

<script>

import WhaleForm from './WhaleForm';
import api from '../../services/api';

export default {
  props: {
    oceans: Array
  },
  data() {
    return {
      whale: null,
      editing: false
    };
  },
  components: {
    WhaleForm
  },
  created() {
    api.getWhale(this.$route.params.id)
      .then(whale => {
        this.whale = whale;
      });
  },
  computed: {
    ocean() {
      if(!this.whale || !this.ocean) {
        return null;
      }

      const { oceanId } = this.whale;
      return this.oceans.find(o => o.id === oceanId);
    }
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are you sure you want to remove ${this.whale.species}?`)) {
        return;
      }

      return api.removeWhale(this.whale.id)
        .then(() => {
          this.$router.push('/whales');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateWhale(toUpdate)
        .then(updated => {
          this.whale = updated;
          this.editing = false;
        });
    }
  }
};

</script>

<style>

</style>
