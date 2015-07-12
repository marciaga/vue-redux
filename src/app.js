import Vue from 'vue'
import itemsView from './view/items-view'

//Vue.config.debug = true

new Vue({
	el: '#app',
	components: {
		'items-view': itemsView
	},
})