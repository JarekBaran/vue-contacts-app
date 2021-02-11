<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>Vue Contacts App</h1>

  <h3 v-if="message">{{ message }}</h3>

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
      message: ``,
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
        .then((response) => {
          this.contacts = response.data;
        })
        .catch((error) => {
          this.message = `Error retrieving data`;
          console.error(error);
        })
    },
    addContact(contact) {
      axios.post(`http://test01.varid.pl:4080/api/contact`, contact)
        .then(() => this.message = `New contact added`)
        .then(() => this.getContacts())
        .catch(error => console.error(error))
    },
    updateContact(contact) {
      axios.put(`http://test01.varid.pl:4080/api/contact/${contact.id}`, contact)
        .then(() => this.message = `Contact ${contact.id} modified`)
        .then(() => this.getContacts())
        .catch(error => console.error(error))
    },
    deleteContact(id) {
      axios.delete(`http://test01.varid.pl:4080/api/contact/delete/${id}`)
        .then(() => this.message = `Contact ${id} deleted`)
        .then(() => this.getContacts())
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

  #app {

  }

</style>
