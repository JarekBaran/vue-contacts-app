<template>
  <h2>Add/modify contact</h2>
  <form @submit.prevent>
    <input type="text" name="name" id="name" required v-model="contact.name" />
    <input type="text" name="last_name" id="last_name" required v-model="contact.last_name" />
    <input type="tel" name="phone_number" id="phone_number" required v-model="contact.phone_number" />
    <input type="email" name="email" id="email" required v-model="contact.email" />
    <input type="text" name="country" id="country" required v-model="contact.country" />
    <input type="text" name="city" id="city" required v-model="contact.city" />
    <input type="text" name="address" id="address" required v-model="contact.address" />
    <button v-if="contact.id" @click="$emit('updateContact', contact)">Modify item</button>
    <button @click="$emit('addContact', contact)">Add new item</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: ['data'],
  computed: {
    contact() {
      return {...this.data}
    }
  }
}
</script>

<style scoped>

</style>
