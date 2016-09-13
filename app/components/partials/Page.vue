<template>
	<nav v-show="lastPage>1">
	  <ul class="pagination">
	    <li><a v-link="{name:'home-comments',params:{page:1}}">&laquo;</a></li>
	    <li v-for="n in lastPage" :class="{'active':currentPage==(n+1)}"><a v-link="{name:'home-comments',params:{page:(n+1)}}">{{n+1}}</a></li>
	    <li><a v-link="{name:'home-comments',params:{page:lastPage}}">&raquo;</a></li>
	  </ul>
	</nav>
</template>

<script>
	export default{
		name:'Page',
		props:{
			currentPage:Number,
			lastPage:Number,
			total:Number
		}
	}
</script>

<style lang="sass">
	
</style>