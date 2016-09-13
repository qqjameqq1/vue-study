<template>
	<div class="alert {{type}} alert-dismissible" role="alert" v-show="msg != ''">
	  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	  {{msg}}
	</div>
</template>

<script>
	export default{
		name:'Message',
		props:{
			msg:String,
			type:String
		}
	}
</script>

<style lang="sass">

</style>