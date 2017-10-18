Vue.component('dropdown-click',{
	data: function(){
		return{
			IsActive: false
		}
	},
	template: `
		<div class="dropdown" :class="IsActive?'is-active':''">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="IsActive = !IsActive">
                    <span>Click me</span>
                        <span class="icon is-small">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        Overview
                    </a>
                    <a href="#" class="dropdown-item">
                        Modifiers
                    </a>
                    <a href="#" class="dropdown-item">
                        Grid
                    </a>
                    <a href="#" class="dropdown-item">
                        Form
                    </a>
                    <a href="#" class="dropdown-item">
                        Elements
                    </a>
                    <a href="#" class="dropdown-item">
                        Components
                    </a>
                    <a href="#" class="dropdown-item">
                        Layout
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">
                        More
                    </a>
                </div>
            </div>
        </div>`,
});
Vue.component('dropdown-hover',{
	template: `
		<div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Hover me</span>
                    <span class="icon is-small">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <div class="dropdown-item">
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                    </div>
                </div>
            </div>
        </div>`,
});

var app = new Vue({
	el: "#app",

});