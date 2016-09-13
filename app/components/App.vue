<template>
	<div id="wrapper">
		
		<router-view>
		</router-view>

		<footer>
	    	<p>&copy;CopyRight:lizhigang 2016</p>
	    </footer>
	</div>

</template>

<script>
	export default{
		name:'App'
	}
</script>

<style>
	header,footer{
		height:50px;
		width:100%;
	}
	header h3{
		color:red;
		text-align: center;
		line-height: 50px;
	}

	footer p{
		color:green;
		text-align: center;
		line-height: 50px;
	}
</style>