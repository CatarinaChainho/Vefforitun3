Vue.component('modal',{
	data: function(){
		return {
			isActive: false
		}
	},
	template: `
	<div>
		<button @click="openMessage" class="button is-primary is-large modal-button">launch</button>
		<div  class="modal" :class="isActive?'is-active':''">
			<div @click="closeMessage" class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<div class="media-left">
						<figure class="image is-64x64">
							<img src="image.png" alt="Image">
						</figure>
					</div>
					<h1 class="title is-4">title</h1>
					<p>cake</p>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="closeMessage"></button>
		</div>
	</div>`,
	methods: {
		closeMessage: function(){
			this.isActive = false;
		},

		openMessage: function(){
			this.isActive = true;
		}
	},
});
var app = new Vue({
	el: "#app",
});