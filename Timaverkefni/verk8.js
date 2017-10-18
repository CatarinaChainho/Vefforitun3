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
			<slot></slot>
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
Vue.component('card', {
	props:["title","avatar","image","subtitle"],
	template:  `
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img :src="image" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-48x48">
							<img :src="avatar" alt="Placeholder image">
						</figure>
					</div>
					<div class="media-content">
						<p class="title is-4">John Smith</p>
						<p class="subtitle is-6">@johnsmith</p>
					</div>
				</div>

				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus nec iaculis mauris. <a>@bulmaio</a>.
					<a href="#">#css</a> <a href="#">#responsive</a>
					<br>
					<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
		</div>`,
});

var app = new Vue({
	el: "#app",
});