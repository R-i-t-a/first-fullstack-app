<template id="whale-template">
    <section class="whale-form-container">
      <form @submit.prevent="handleSubmit">
        <p>
          <label>
            Species: <input type="text" name="species" placeholder="Name of Species" required v-model="edit.species">
          </label>
        </p>
        <p>
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
        </p>
        <p>
          <label>
              Weight: <input type="text" name="weight" placeholder="Average Weight" required v-model="edit.weight">
          </label>
        </p>
        <p>
          <label>
              URL: <input type="text" name="url" placeholder="Insert URL Here" required v-model="edit.url" >
          </label>
        </p>
        <label>
            <button class="submit" type="submit">{{ label }}</button>
        </label>
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
input[type=text] {
    width: 20%;
    padding: 12px 20px;
    margin: 8px 10px;
    box-sizing: border-box;
}

select {
   -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;
   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
   font-size: inherit;
   margin: 10px;
   overflow: hidden;
   padding: 5px;
   text-overflow: ellipsis;
   width: 200px;
}

button {
    background-color: rgb(76, 116, 175); /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 20px;
}


</style>
