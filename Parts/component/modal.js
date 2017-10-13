Vue.component('modal',{
				props: ['title'],

				data: function(){
					return {
						isVisible: false
					};
				},

				template: `
				<button>launch</button>
					<div  v-show="isVisible== true">
						<div class="modal-background"></div>
						<div class="modal-content">
							<!-- Any other Bulma elements you want -->
						</div>
						<button class="modal-close is-large" aria-label="close" @click="closeMessage"></button>
					</div>`,

				methods: {
					closeMessage: function(){
						console.log("cake");
						this.isVisible = false;
					}

				},
			});
			
			var app = new Vue({
				el: "#app",

			});