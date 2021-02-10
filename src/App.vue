<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Vue Contacts App</h1>
  <Form />
  <Table />
</template>

<script>
import Form from './components/Form.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Form,
    Table
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
