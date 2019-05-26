<template>
  <div class="hello">

<b-container class="bv-example-row fluid">
  <b-row>
    <b-col cols="2">
      <b-list-group>
      <b-list-group-item v-for="(data, index) in medicines" :key='index' v-on:click="fire(index)" :class="{active:index==SelectedIndex}">{{data.medicine}}</b-list-group-item>
     
      </b-list-group>
    </b-col>
    <b-col cols="3"> {{SelectedObj.medicine}} - <input type="text" v-model="SelectedObj.weight" />
   </b-col>

    <b-col cols="6">
      <b-row>
        <div class="mx-2 holder" v-for="(data, index) in prescriptions" 
        :key='index'>
      <b-card
        :title="data.medicine"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        
      >
        <b-card-text>
          <input type="text" v-model="data.weight" />
         {{data.weight}} 
         
        </b-card-text>

        <!--<b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </div>
      </b-row>
      </b-col>

  </b-row>
</b-container>

<!--  <b-container>
  <b-row>
    <div class="mx-2 my-4 holder" v-for="(data, index) in prescriptions" 
        :key='index'>
      <b-card
        :title="data.medicine"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        
      >
        <b-card-text>
         {{data.weight}} 
         
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
   
    </b-row>
</b-container> -->



  <!-- <div class="holder">
     <b-list-group>
       <b-list-group-item v-for="(data, index) in prescriptions" :key='index'>{{data.medicine}} - {{data.weight}}</b-list-group-item>
     
      </b-list-group>
    
   </div> -->

  <div>
    <p>
      <button v-on:click="addMedicine()" class="btn btn-primary btn-sm">Add</button>
      <router-link :to="{ name: 'Print', params: { msg:prescriptions } }"> Print </router-link>
	  </p>
  </div>
  </div>
  
</template>




<script>
require('fs')
import XLSX from 'xlsx/dist/xlsx.full.min.js'

export default {
  name: 'Patient',
  props: {
    msg: String
  },
  data()
  {
    return{
      'MyMedicine':'',
      prescriptions: [],
      medicines: [
        {"medicine": "Brufen", "weight": "250mg"},
        {"medicine": "Ponstan", "weight": "150mg"}
      ],
      SelectedIndex: '-1',
      SelectedObj: '',
      SelectedWeight: '',
      showAlert: true
    }
  },
   mounted(){
   console.log("Hello Sheeraz!!!!");
   
   //if(typeof require !== 'undefined') 
    //  XLSX = require('xlsx/dist/xlsx.full.min.js')

    /* set up an async GET request */
      var req = new XMLHttpRequest();
      req.open("GET", './Medicines.xlsx', true);
      req.responseType = "arraybuffer";

     
    var that = this;
    req.onreadystatechange = function(){
     if (req.readyState === 4){
        if (req.status === 200){
           console.log("req done successfully");
           var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});
        // DO SOMETHING WITH workbook HERE 
        console.log(workbook);
        var i;
        for (i = 2; i< workbook.Strings.length; i+=2)
        {
          //medicines.push("Test");
          //that.medicines.push("Test");
          that.medicines.push({"medicine":workbook.Strings[i]['h'], "weight":workbook.Strings[i+1]['h']})
          
          //console.log(workbook.Strings[i]['h']);
        }
           
        } else {
           console.log("req failed");
        }
      } else {
        console.log("xhr processing going on");
     }
    }
      req.send();
     
      //var data = new Uint8Array(req.response);
     // var workbook = XLSX.read(data, {type:"array"});
        // DO SOMETHING WITH workbook HERE 
     // console.log(workbook);

      //var i;
      //  for (i = 2; i< workbook.Strings.length; i+=2)
       // {
         // medicines.push("Test");
         // this.medicines.push({"medicine":workbook.Strings[i], "weight":workbook.Strings[i+1]})
         // alert(workbook.Strings[i]);
        //  console.log(workbook.Strings[i]);
       // }

       // console.log(workbook.Strings[1]);
    
  // workbook = XLSX.readFile('./assets/Medicines.xlsx');
 },
   methods: {
    addMedicine: function(){
      console.log(this.$data.MyMedicine);
      console.log(this.$data.SelectedWeight)
      this.prescriptions.push(this.$data.SelectedObj);
      this.$data.MyMedicine = '';
      this.$data.SelectedObj = Object.assign({}, null);
      this.$data.SelectedIndex = -1;
    },
    fire: function(index){
      
      this.$data.SelectedIndex = index;
      //this.$data.SelectedObj = this.$data.medicines[index];

      this.$data.SelectedObj = Object.assign({}, this.$data.medicines[index]);

      console.log(this.$data.SelectedObj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.alert{
  background-color: yellow;
  width: 199%;
  height: 30px;
}
</style>
