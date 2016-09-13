<template>
	<header>
		<h3>留言板<small>vuejs案例</small></h3>
	</header>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="col-lg-8 col-lg-offset-2">
					<a class="btn btn-sm btn-primary pull-right" v-link="{path:'/comment'}">我要留言</a>
				</div>
				<div class="col-lg-12"  v-show="items.length==0">
					<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>
				</div>
				<div class="col-lg-8 col-lg-offset-2"  v-show="items.length>0">
					<ul class="list-group" >
					  <li class="list-group-item" v-for="item in items"><span class="badge">{{item.created_at}}</span>{{item.nickname}} 说：{{item.content}}</li>
					</ul>			
				</div>
				<div class="col-lg-8 col-lg-offset-2">
						<Page :current-page="current_page" :last-page="last_page" :total="total"></Page>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import {config} from '../config.js';
	import Page from './partials/Page.vue';
	export default{
		name:'Home',
		methods:{
		},
		data:function(){
			return {
				items:[],
				current_page:1,
				last_page:1,
				total:1
			};
		},
		components:{
			Page
		},
		route:{
			 activate: function (transition) {
		      // console.log('hook-example activated!')
		      document.title='留言板-vuejs';
		      // console.log(this.$route.params.page);
		      transition.next();
		    },
			data:function(transition){
				this.current_page=this.$route.params.page?parseInt(this.$route.params.page):1;
				// console.log(this.current_page);
				this.$http.get(config.api+'/items?page='+this.current_page).then((response)=>{
					transition.next({
						items:response.data.data,
						current_page:response.data.current_page,
						last_page:response.data.last_page,
						total:response.data.total
					});
				},(response)=>{

				});
			}
		}
	}
</script>

<style lang="sass">
	.messages{
		.title{
			color:blue;
		}
	}
	.list-group{
		margin-top:5px;
	}

	.glyphicon-refresh-animate {
	    -animation: spin .7s infinite linear;
	    -webkit-animation: spin2 .7s infinite linear;
	}

	@-webkit-keyframes spin2 {
	    from { -webkit-transform: rotate(0deg);}
	    to { -webkit-transform: rotate(360deg);}
	}

	@keyframes spin {
	    from { transform: scale(1) rotate(0deg);}
	    to { transform: scale(1) rotate(360deg);}
	}
</style>