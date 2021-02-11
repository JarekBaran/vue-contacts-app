<template>
  <h2>Contacts List</h2>
  <DataTable :value="contacts" :paginator="true" :rows="10" class="p-datatable-gridlines p-datatable-striped">
    <Column :sortable="true" field="name" header="Name"></Column>
    <Column :sortable="true" field="last_name" header="Code"></Column>
    <Column :sortable="true" field="phone_number" header="Phone number"></Column>
    <Column :sortable="true" field="email" header="E-mail"></Column>
    <Column :sortable="true" field="country" header="Country"></Column>
    <Column :sortable="true" field="city" header="City"></Column>
    <Column :sortable="true" field="address" header="Address"></Column>
    <Column field="contact" header="Contact">
      <template #body="slotProps">
        <Button label="Modify" @click="modify($event, slotProps.data)" icon="pi pi-user-edit" class="p-button-info" />
        <Button label="Remove" @click="remove($event, slotProps.data.id)" icon="pi pi-trash" class="p-button-danger" />
      </template>
    </Column>
  </DataTable>
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
        accept: () => this.$emit('modifyContact', contact)
      });
    },
    remove(event, id) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `Are you sure you want to remove id:${id}?`,
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.$emit('deleteContact', id)
      });
    },
  }
}
</script>

<style scoped>

  button {
    width: 100%;
    margin-top: 3px;
  }

</style>
