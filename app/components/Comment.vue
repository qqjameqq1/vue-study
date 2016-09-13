<template>
	<header>
		<h3>我要留言 <small><a v-link="{path:'/'}" class="btn btn-xs btn-default">返回</a></small></h3>
	</header>
	<div class="container">
		<div class="col-lg-12">
			<message :msg="msg" :type="msgType"></message>
			<form role="form" v-on:submit="comment">
			  <div class="form-group">
			    <label for="nickname">昵称</label>
			    <input type="text" class="form-control" id="nickname" placeholder="Enter your nickname" v-model="nickname">
			  </div>
			  <div class="form-group">
			    <label for="content">留言</label>
			    <textarea class="form-control" id="content" placeholder="Content" rows="6" v-model="content"></textarea> 
			  </div>
			  <button type="submit" class="btn btn-default">提交</button>
			</form>
			{{nickname}}<br>
			{{content}}
		</div>
	</div>
</template>

<script>
	import {config} from '../config.js';
	import Message from './partials/Message.vue';
	export default {
		name:'Comment',
		data:function(){
			return {
				nickname:'',
				content:'',
				msg:'',
				msgType:''
			}
		},
		components:{
			Message
		},
		methods:{
			comment(event){
				// console.log(http);
				// this.$http.get(config.api+'/test').then((response)=>{
				// 	//sucess
				// 	console.log(response.data.data);
				// },(response)=>{
				// 	//error
				// 	console.log(response);
				// });
				if(this.nickname==''){
					this.msgType='alert-danger';
					this.msg='昵称不能为空';
					event.preventDefault();
					return false;
				}

				if(this.content==''){
					this.msgType='alert-danger';
					this.msg="请输入留言内容";
					event.preventDefault();
					return false;
				}


				this.$http.post(config.api+'/comment',{nickname:this.nickname,content:this.content}).then((response)=>{
					//sucess
					// console.log(response.data);
					if(response.data.error==0){
						this.msg=response.data.msg;
						this.msgType="alert-success";
						var route=this.$router;
						setTimeout(function(){
							route.go({name:'home'});
						},1500);
						
					}else{
						this.msgType="alert-warning";
						this.msg=response.data.msg;
					}
				},(response)=>{
					//error
					console.log(response);
				});
				event.preventDefault();
			}
		},
		route:{
			 activate: function (transition) {
		      // console.log('hook-example activated!')
		      document.title='我要留言';
		      transition.next()
		    },
			data:function(){
				// alert(1);
			}
		}
	}
</script>

<style lang="sass">
	
</style>