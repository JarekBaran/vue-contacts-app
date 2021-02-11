<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Vue Contacts App</h1>
  <Form :editContact="contact" />
  <Table @modifyContact="setContact($event)" />
</template>

<script>
import Form from './components/Form.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Form,
    Table
  },
  data() {
   return {
     contact: {}
    }
  },
  methods: {
    setContact(contact) {
      this.contact = contact;
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
