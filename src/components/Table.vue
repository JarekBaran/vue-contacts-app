<template>
  <h2>Table Component</h2>
  <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  <table>
    <tr v-for="contact in contacts" :key="contact.id">
      <td>{{ contact.name }}</td>
      <td>{{ contact.last_name }}</td>
      <td>{{ contact.phone_number }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.country }}</td>
      <td>{{ contact.city }}</td>
      <td>{{ contact.address }}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Table',
  created() {
    this.getContacts();
  },
  data() {
    return {
      contacts: [],
      errorMsg: '',
    }
  },
  methods: {
    getContacts() {
      axios.get('http://test01.varid.pl:4080/api/contacts')
        .then((response) => {
          this.contacts = response.data;
        })
        .catch((error) => {
          console.error(error);
          this.errorMsg = 'Error retrieving data';
        })
    }
  }
}
</script>

<style scoped>

</style>
