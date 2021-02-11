<template>
  <form @submit.prevent class="p-d-flex p-jc-center">
    <Fieldset legend="Add/modify contact" class="p-fluid p-text-left">
      <label for="name">Name</label>
      <InputText type="text" id="name" required v-model="contact.name" />

      <label for="last_name">Last name</label>
      <InputText type="text" id="last_name" required v-model="contact.last_name" />

      <label for="phone_number">Phone number</label>
      <InputText type="tel" id="phone_number" required v-model="contact.phone_number" />

      <label for="email">E-mail</label>
      <InputText type="email" id="email" required v-model="contact.email" />

      <label for="country">Country</label>
      <InputText type="text" id="country" required v-model="contact.country" />

      <label for="city">City</label>
      <InputText type="text" id="city" required v-model="contact.city" />

      <label for="address">Address</label>
      <InputText type="text" id="address" required v-model="contact.address" />

      <span class="p-buttonset p-mt-3">
        <Button label="Modify item" v-if="contact.id" @click="update($event, contact)" icon="pi pi-check-circle" class="p-button-info" />
        <Button label="Add new item" @click="add($event, contact)" icon="pi pi-save" class="p-button-danger" />
      </span>
    </Fieldset>
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
  },
  methods: {
    update(event, contact) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `Are you sure you want to update contact ${contact.name} ${contact.last_name}?`,
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.$emit('updateContact', contact)
      });
    },
    add(event, contact) {
      this.$confirm.require({
        target: event.currentTarget,
        message: `Are you sure you want to add new contact ${contact.name} ${contact.last_name}?`,
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.$emit('addContact', contact)
      });
    },
  }
}
</script>

<style scoped>

  fieldset {
    max-width: 600px;
  }

  label {
    font-weight: 600;
    margin-left: 5px;
  }

  input {
    margin: 10px 0;
  }

</style>
