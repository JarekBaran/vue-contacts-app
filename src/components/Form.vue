<template>
  <h2>Form Component</h2>
  <form @submit.prevent>
    <input type="text" name="name" id="name" required v-model="formData.name" />
    <input type="text" name="last_name" id="last_name" required v-model="formData.last_name" />
    <input type="tel" name="phone_number" id="phone_number" required v-model="formData.phone_number" />
    <input type="email" name="email" id="email" required v-model="formData.email" />
    <input type="text" name="country" id="country" required v-model="formData.country" />
    <input type="text" name="city" id="city" required v-model="formData.city" />
    <input type="text" name="address" id="address" required v-model="formData.address" />
    <button v-if="formData.id" @click="modifyContact(formData.id)">Modify item</button>
    <button v-else @click="addContact">Add new item</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
  props: ['editContact'],
  computed: {
    formData() {
      return {...this.editContact}
    }
  },
  methods: {
    addContact() {
      axios.post('http://test01.varid.pl:4080/api/contact', this.formData)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
    modifyContact(id) {
      axios.put('http://test01.varid.pl:4080/api/contact/' + id, this.formData)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>

</style>
