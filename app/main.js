import Vue from "vue";
import Router from "vue-router";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Comment from "./components/Comment.vue";
import VueResource from'vue-resource';

Vue.use(VueResource);

Vue.use(Router);

var router=new Router();

router.map({
	'/':{
		name:'home',
		component:Home
	},
	'/:page':{
		name:'home-comments',
		component:Home
	},
	'/comment':{
		name:'comment',
		component:Comment
	}
});

router.redirect({
	'*':'/'
});


router.start(App,'#app');