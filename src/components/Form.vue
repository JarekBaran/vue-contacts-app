<template>
  <h2>Add/modify contact</h2>
    <form @submit.prevent>
      <span class="p-field">
        <InputText type="text" id="name" required v-model="contact.name" />
        <label for="name">Name</label>
      </span>
      <span class="p-field">
        <InputText type="text" id="last_name" required v-model="contact.last_name" />
        <label for="last_name">Last name</label>
      </span>
      <span class="p-field">
        <InputText type="tel" id="phone_number" required v-model="contact.phone_number" />
        <label for="phone_number">Phone number</label>
      </span>
      <span class="p-field">
        <InputText type="email" id="email" required v-model="contact.email" />
        <label for="email">E-mail</label>
      </span>
      <span class="p-field">
        <InputText type="text" id="country" required v-model="contact.country" />
        <label for="country">Country</label>
      </span>
      <span class="p-field">
        <InputText type="text" id="city" required v-model="contact.city" />
        <label for="city">City</label>
      </span>
      <span class="p-field">
        <InputText type="text" id="address" required v-model="contact.address" />
        <label for="address">Address</label>
      </span>
      <span class="p-buttonset">
        <Button label="Modify item" v-if="contact.id" @click="$emit('updateContact', contact)" icon="pi pi-check-circle" class="p-button-info" />
        <Button label="Add new item" @click="$emit('addContact', contact)" icon="pi pi-save" class="p-button-danger" />
      </span>
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
