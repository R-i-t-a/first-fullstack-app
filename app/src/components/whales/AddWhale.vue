<template>
    <section>
      <h1>New Whale</h1>
      <form v-on:submit.prevent="handleSubmit">
        <p>
            <label>
                Species: <input v-model="whale.species" placeholder="Name of Species">
            </label>
        </p>
        <p>
            <label>
                Weight: <input v-model="whale.weight" placeholder="Average Weight">
            </label>
        </p>
        <p>
            <label>
                URL: <input v-model="whale.url" placeholder="Insert URL Here">
            </label>
        </p>
        <p>
            <label>
                Ocean: <input v-model="whale.oceanId" placeholder="Oceans where these are found">
            </label>
        </p>
        <p>
            <button>Submit</button>
        </p>
      </form>
    </section>
</template>

<script>

let initWhale = () => {
  return {
    species: '',
    weight: '',
    url: ''
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      whale: initWhale()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.whale)
        .then(() => {
          this.whale = initWhale();
        });
    }
  }
};
</script>

<style>

</style>
