<template>
  <form @submit.prevent class="p-d-flex p-jc-center">
    <Fieldset legend="Add/modify contact" class="p-fluid p-text-left">

      <div class="p-field">
        <label for="name">Name</label>
        <InputText :required="true" type="text" id="name" @input="isValid" v-model="contact.name" />
        <small v-if="errors.name" class="p-error"> {{ errors.name }}</small>
      </div>

      <div class="p-field">
        <label for="last_name">Last name</label>
        <InputText :required="true" type="text" id="last_name" @input="isValid" v-model="contact.last_name" />
        <small v-if="errors.last_name" class="p-error"> {{ errors.last_name }}</small>
      </div>

      <div class="p-field">
        <label for="phone_number">Phone number</label>
        <InputText :required="true" type="tel" id="phone_number" @input="isValid" v-model="contact.phone_number" />
        <small v-if="errors.phone_number" class="p-error"> {{ errors.phone_number }}</small>
      </div>

      <div class="p-field">
        <label for="email">E-mail</label>
        <InputText :required="true" type="email" id="email" @input="isValid" v-model="contact.email" />
        <small v-if="errors.email" class="p-error"> {{ errors.email }}</small>
      </div>

      <div class="p-field">
        <label for="country">Country</label>
        <InputText :required="true" type="text" id="country" @input="isValid" v-model="contact.country" />
        <small v-if="errors.country" class="p-error"> {{ errors.country }}</small>
      </div>

      <div class="p-field">
        <label for="city">City</label>
        <InputText :required="true" type="text" id="city" @input="isValid" v-model="contact.city" />
        <small v-if="errors.city" class="p-error"> {{ errors.city }}</small>
      </div>

      <div class="p-field">
        <label for="address">Address</label>
        <InputText :required="true" type="text" id="address" @input="isValid" v-model="contact.address" />
        <small v-if="errors.address" class="p-error"> {{ errors.address }}</small>
      </div>

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
  data() {
    return {
      errors: {}
    }
  },
  computed: {
    contact() {
      return {...this.data}
    },
  },
  methods: {
    isValid(e) {
      let valid = (e.target.value !== ``);

      (e.target.type === `tel`) && ( valid = /[()\-+.]*\d+/gmi.test(e.target.value) ); // regex validation for input:tel
      (e.target.type === `text`) && ( valid = /[a-z]+/gmi.test(e.target.value) ); // regex validation for input:text
      (e.target.type === `email`) && ( valid = /\S+@\S+\.\S+/gmi.test(e.target.value) ); // regex validation for input:email

      !valid ? e.target.classList.add(`p-invalid`) : e.target.classList.remove(`p-invalid`); // add/remove input not valid css class

      this.errors.[e.target.id] = !valid && `Require ${e.target.id}`; // show input error message
    },
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
    width: 600px;
  }

  label {
    font-weight: 600;
  }

</style>
