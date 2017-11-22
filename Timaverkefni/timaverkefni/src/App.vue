<template>
    <div id="app" class="column is-one-third is-offset-4">
          <div class="column">
               <label style="float:left; color:#C0C0C0">Filter</label><br>
               <div style="text-align:center; display:inline-block; padding-left:5px;">
                    <input type="radio" :value="companies">{{companies}}
               </div><br>
          </div>
          <p>Amount of Stations: {{response.length}}</p><br>
          <div class="box" id="place" v-for="petrol in response">
              <h1 style="float:left; color:black">{{petrol.company}}</h1>
              <h1 style="float:right; color:#c0c0c0">Bensin95 - {{petrol.bensin95}}</h1><br><br>
              <h1 style="float:left; color:black">{{petrol.name}}</h1>
              <h1 style="float:right; color:#c0c0c0">Diesel - {{petrol.diesel}}</h1><br>
          </div>
    </div>
</template>

<script>
     import axios from 'axios';
     export default {
          data() {
               return{
                    response: [],
                    maxBensinPrice : 0,
                    companies: petrol.company
               };
          },
         computed: {
               sortedStations(){
                    var self = this;
                    var sorted = this.response.sort(function(a,b){
                         return parseFloat(a.bensin95) - parseFloat(b.bensin95);
                     });

                    sorted =sorted.filter(function(response){
                         return response.bensin95 < self.maxBensinPrice;
                    }.bind(this));  
                    return sorted;

                    sorted =sorted.filter(function(response){
                         if(this.selectedCompanies === "All"){var isSelected = true};
                         return response.company === this.selectedCompanies || isSelected;
                    }.bind(this));
               },
               filterCompanies(){
                    var sortCompanies = this.response.sort();
                    if(a.company < b.company) return -1;
                    if(a.company > b.company) return 1;
                    return 0;
               }
          },

            mounted() {
               var self = this;
               axios.get('http://apis.is/petrol')
               .then(function(response){
                    self.response = response.data.results;
               })

               .catch(function(errors){
                    console.log(errors);
               });
           },
          }
</script>

<style>
     .box:hover{
          color: black;
     }
</style>