<template>
    <div id="app" class="column is-one-third is-offset-4">
        <div class="column" style="padding-bottom: 20px;">
          <label style="float:left;">Filter</label><br>
          <div style="text-align:center;">
            <input type="radio" v-model="selectedCompanies" name="all">All
            <input type="radio" v-model="selectedCompanies" name="atlantsolia">Atlantsolia
            <input type="radio" v-model="selectedCompanies" name="costco">CostCo Iceland
            <input type="radio" v-model="selectedCompanies" name="daelan">Dælan
            <input type="radio" v-model="selectedCompanies" name="n1">N1 <br>
            <input type="radio" v-model="selectedCompanies" name="olis">Olís
            <input type="radio" v-model="selectedCompanies" name="orkan">Orkan
            <input type="radio" v-model="selectedCompanies" name="orkanx">Orkan x
            <input type="radio" v-model="selectedCompanies" name="ob">ÓB
          </div><br>
        </div>
          <p>Amount of Stations: {{response.length}}</p>
          <div class="box" id="place" v-for="petrol in response">
              <h1 style="float:left; color:black">{{petrol.company}}</h1>
              <h1 style="float:right; color:gray">Bensin95: {{petrol.bensin95}}</h1><br>
              <h1 style="float:left; color:black">Station: {{petrol.name}}</h1>
              <h1 style="float:right; color:gray">Diesel: {{petrol.diesel}}</h1>
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
                    selectedCompanies: "All"
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
     #place:hover{
          color: black;
     }
</style>