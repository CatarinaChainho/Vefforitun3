<template>
    <div id="app" class="column is-one-third is-offset-4">
        <div class="column" style="margin:20px; padding-bottom: 20px;">
          <label style="float:left;">Filter</label><br>
          <div>
            <input type="radio" name="all">All
            <input type="radio" name="atlantsolia">Atlantsolia
            <input type="radio" name="costco">CostCo Iceland
            <input type="radio" name="daelan">Dælan
            <input type="radio" name="n1">N1
            <input type="radio" name="olis">Olís
            <input type="radio" name="orkan">Orkan
            <input type="radio" name="orkanx">Orkan x
            <input type="radio" name="ob">ÓB
          </div>
          <p>Amount of Stations:{{}}</p>
        </div>
          <div class="box" id="place" v-for="petrol in response">
              <h1 style="float:left;">{{petrol.company}}</h1>
              <h1 style="float:right;">Bensin95: {{petrol.bensin95}}</h1><br>
              <h1 style="float:left;">Station: {{petrol.name}}</h1>
              <h1 style="float:right;">Diesel: {{petrol.diesel}}</h1>
          </div>
    </div>
</template>

<script>
     import axios from 'axios';
     export default {
          data() {
               return{
                    response: [],
                    maxBensinPrice : 0
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

</style>
