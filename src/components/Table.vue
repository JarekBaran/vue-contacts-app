<template>
  <h2>Contacts List</h2>
  <table>
    <tr v-for="contact in contacts" :key="contact.id">
      <td>{{ contact.name }}</td>
      <td>{{ contact.last_name }}</td>
      <td>{{ contact.phone_number }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.country }}</td>
      <td>{{ contact.city }}</td>
      <td>{{ contact.address }}</td>
      <td><button @click="$emit('modifyContact', contact)">Modify</button></td>
      <td><button @click="$emit('deleteContact', contact.id)">Remove</button></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['contacts'],
  emits: ['modifyContact', 'deleteContact'],
}
</script>

<style scoped>

</style>
