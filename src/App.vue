<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Vue Contacts App</h1>
  <Toast position="top-right" />
  <Form :data="contact" @updateContact="updateContact($event)" @addContact="addContact($event)" />
  <Table :contacts="contacts" @modifyContact="modifyContact($event)" @deleteContact="deleteContact($event)" />
  <ConfirmPopup />

</template>

<script>
import axios from 'axios';
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
      contact: {
        name: ``,
        last_name: ``,
        phone_number: ``,
        email: ``,
        country: ``,
        city: ``,
        address: ``,
      },
      contacts: [],
    }
  },
  created() {
    this.getContacts();
  },
  methods: {
    modifyContact(contact) {
      this.contact = contact;
    },
    getContacts() {
      axios.get(`http://test01.varid.pl:4080/api/contacts`)
        .then((response) => this.contacts = response.data )
        .catch((error) => {
          this.$toast.add({severity:'error', summary: 'Error', detail:'Error retrieving contacts from API', life: 3000});
          console.error(error);
        })
    },
    addContact(contact) {
      axios.post(`http://test01.varid.pl:4080/api/contact`, contact)
        .then(() => this.$toast.add({severity:'success', summary: 'Success', detail:`Contact ${contact.name} ${contact.last_name} added!`, life: 5000}))
        .then(() => this.getContacts())
        .catch((error) => {
          this.$toast.add({severity:'error', summary: 'Error', detail:`Error on add ${contact.name} ${contact.last_name} contact`, life: 3000});
          console.error(error);
        })
    },
    updateContact(contact) {
      axios.put(`http://test01.varid.pl:4080/api/contact/${contact.id}`, contact)
        .then(() => this.$toast.add({severity:'info', summary: 'Modified', detail:`Contact ${contact.name} ${contact.last_name} updated!`, life: 5000}))
        .then(() => this.getContacts())
        .catch((error) => {
          this.$toast.add({severity:'error', summary: 'Error', detail:`Error on update ${contact.name} ${contact.last_name} contact`, life: 3000});
          console.error(error);
        })
    },
    deleteContact(contact) {
      axios.delete(`http://test01.varid.pl:4080/api/contact/delete/${contact.id}`)
        .then(() => this.$toast.add({severity:'warn', summary: 'Removed', detail:`Contact ${contact.name} ${contact.last_name} deleted!`, life: 5000}))
        .then(() => this.getContacts())
        .catch((error) => {
          this.$toast.add({severity:'error', summary: 'Error', detail:'Error on delete contact', life: 3000});
          console.error(error);
        })
    }
  }
}
</script>

<style>

  #app {
    text-align: center;
    margin: 16px;
  }

</style>
