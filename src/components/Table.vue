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
      <td><Button label="Modify" @click="modify($event, contact)" icon="pi pi-user-edit" class="p-button-info" /></td>
      <td><Button label="Remove" @click="remove($event, contact.id)" icon="pi pi-trash" class="p-button-danger" /></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['contacts'],
  emits: ['modifyContact', 'deleteContact'],
  methods: {
    modify(event, contact) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `Are you sure you want to modify id:${contact.id}?`,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$emit('modifyContact', contact);
        }
      });
    },
    remove(event, id) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `Are you sure you want to remove id:${id}?`,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$emit('deleteContact', id);
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
