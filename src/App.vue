<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <Patient msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Patient from './components/Patient.vue';

//if(typeof require !== 'undefined') XLSX = require('xlsx');
//export var workbook = XLSX.readFile('./assets/Medicines.xlsx');

export default {
  name: 'app',
  components: {
    Patient
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
