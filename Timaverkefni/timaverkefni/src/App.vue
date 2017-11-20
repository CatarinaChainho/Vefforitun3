<template>
    <div id="app columns">
        <div class="column is-offset-5">
          <input type="number">
          <button>Sort By Company</button>
          <button>Sort By Besin Price</button>
          <button>Sort By Diesel Price</button>
        </div>
          <div class="box column is-one-third has-text-centered is-offset-4" id="place" v-for="petrol in response">
              <h1 class="title">{{petrol.company}}</h1>
              <p>Station: {{petrol.name}}</p>
              <p>Bensin95: {{petrol.bensin95}}</p>
              <p>Diesel: {{petrol.diesel}}</p>
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
