import Vue from "vue";
import Router from "vue-router";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Cat from "./components/Cat.vue";
import Article from "./components/Article.vue";

Vue.use(Router);

var router=new Router();

router.map({
	'/':{
		component:Home
	},
	'/cat/:id':{
		component:Cat
	},
	'/article/:id':{
		component:Article
	}
});

router.redirect({
	'*':'/'
});


router.start(App,'#app');