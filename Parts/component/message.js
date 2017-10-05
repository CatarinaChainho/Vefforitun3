Vue.component('notification',{
	
	props: ['title'],


	data: function(){
		return {
			isVisible: true
		};
	},


	template: `
	<div v-show="isVisible== true">	
		<button @click="removeMessage" class="delete" aria-label="delete"></button>
				 Primar lorem ipsum dolor sit amet, consectetur
				  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
				  consectetur adipiscing elit
				<slot></slot>
	</div>`,

	methods: {
		removeMessage: function(){
			console.log("cake");
			this.isVisible = false;
		}
	}
});
var app = new Vue({
	el: "#app",
	
});