<template id="whale-template">
    <section class="whale-form-container">
      <form @submit.prevent="handleSubmit">
        <label>
            Species: <input type="text" name="species" placeholder="Name of Species" required v-model="edit.species">
        </label>

        <label>
          Ocean: 
          <select v-model.number="edit.oceanId">
            <option disabled value="">Please select an ocean</option>
            <option
              v-for="ocean in oceans"
              :key="ocean.id"
              :value="ocean.id">
              {{ocean.name}}
            </option>
          </select>
        </label>

        <label>
            Weight: <input type="text" name="weight" placeholder="Average Weight" required v-model="edit.weight">
        </label>

        <label>
            URL: <input type="text" name="url" placeholder="Insert URL Here" required v-model="edit.url" >
        </label>

        <label>
            <button type="submit">{{ label }}</button>
        </label>
      </form>
      {{ edit }}
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
    whale: Object,
    label: String,
    oceans: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.whale ? Object.assign({}, this.whale) : initWhale()
    };
  },
  computed: {
    editMode() {
      return !!this.whale;
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initWhale();
        });
    },
  }
};
</script>

<style>

</style>
