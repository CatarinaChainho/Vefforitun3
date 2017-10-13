Vue.component('button-counter',{
	template: `<button class="button is-primary" @click="IncreaseNumbers">	{{counter}}	</button>`,

	data: function(){
		return {
			counter: 0
		};
	},

	methods: {
		IncreaseNumbers: function(){
			this.counter += 1
			this.$emit("increase")
		}
	}
});

var app = new Vue({
	el: '#app',
	data: {
		total: 0
	},

	methods: {
    	IncreaseTotal: function () {
    		this.total += 1
   		}
	}
});