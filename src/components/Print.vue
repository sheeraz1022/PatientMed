<template>
    <html>
    
    

    <b-container class="bv-example-row">
  <b-row>
    <b-col></b-col>
    <b-col>
        <p><b>Dr Imtiaz Ali - FRCP</b></p><br />
        <p>Medical Speaclist</p>

    </b-col>
    <b-col></b-col>
  </b-row>
</b-container>

<b-table  small bordered  outlined  :items="msg" :fields="fields"></b-table> 


    </html>
</template>


<script>
export default {
    name: 'Print',
    props: ['msg'],
    data(){
        return{
            fields: ['medicine', 'weight']
        }
    }
}
</script>
