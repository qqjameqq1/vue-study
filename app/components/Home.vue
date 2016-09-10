<template>
	<div id="content">
		<p class="title">Home</p>
		<p>
			<a :href="'#/cat/1'">文章列表111</a>
		</p>
	</div>
</template>

<script>
	export default{
		name:'Home'
	}
</script>

<style>
	#content p.title{
		text-align: center;
		color:blue;
	}
	#content p.title:before{
		content:'This is';
	}
</style>