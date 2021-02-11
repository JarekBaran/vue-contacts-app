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
      <td><Button label="Modify" @click="$emit('modifyContact', contact)" icon="pi pi-user-edit" class="p-button-info" /></td>
      <td><Button label="Remove" @click="$emit('deleteContact', contact.id)" icon="pi pi-trash" class="p-button-danger" /></td>
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
