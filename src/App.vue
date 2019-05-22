<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Patient from './components/Patient.vue';
import Print from './components/Print.vue'
//if(typeof require !== 'undefined') XLSX = require('xlsx');
//export var workbook = XLSX.readFile('./assets/Medicines.xlsx');

export default {
  name: 'app',
  components: {
    Patient,
    Print
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
