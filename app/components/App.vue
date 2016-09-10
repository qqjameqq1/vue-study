<template>
	<div id="wrapper">
		<header>
			<h3>这是Vuejs学习案例</h3>
		</header>
		
		<div id="main">
			<router-view
		      class="view"
		      keep-alive
		      transition
		      transition-mode="out-in">
		    </router-view>
		</div>
		
	    <footer>
	    	<p>&copy;CopyRight:lizhigang 2016</p>
	    </footer>
	</div>
	
</template>

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