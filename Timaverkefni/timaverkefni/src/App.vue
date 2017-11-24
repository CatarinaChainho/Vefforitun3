<template>
     <div id="app" class="column is-one-third is-offset-4">
          <div class="column">
               <label style="float:left; color:#C0C0C0">Filter</label><br><br>
               <input type="radio" value="All" v-model="selectedCompanies">All
               <div style="text-align:center; display:inline-block; padding-left:5px;" v-for="allCompanies in companyList">
                    <input :value="allCompanies">{{allCompanies}}
               </div><br>
          </div>
          <p>Amount of Stations: {{response.length}}</p><br>
          <div class="box" id="place" v-for="petrol in sortedStations">
               <h1 style="float:left; color:black" class="title is-6">{{petrol.company}}</h1>
               <h1 style="float:right; color:#c0c0c0" class="price">Bensin95 - {{petrol.bensin95}}</h1><br><br>
               <h1 style="float:left; color:black" class="subtitle is-6">{{petrol.name}}</h1>
               <h1 style="float:right; color:#c0c0c0" class="price">Diesel - {{petrol.diesel}}</h1><br>
          </div>
     </div>
</template>

<script>
     import axios from 'axios';
     export default {
          data() {
               return{
                    response: [],
                    companyList: [],
                    maxBensinPrice : 300,
                    selectedCompanies:444 ,
               }
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
                    var sortCompanies = this.response.sort(function(a,b){;
                         if(a.company < b.company) return -1;
                         if(a.company > b.company) return 1;
                         return 0;
                    });

                    sortCompanies = sortCompanies
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
     .box :hover{
          .price {
                color: black;
          }
     }
</style>
