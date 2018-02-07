<template>
	<div id="article">
		<div class="nav">
			<ul>
		    	<li class="l-btn" onclick="window.history.go(-1)"></li>
		    </ul>
		</div>
		<div class="content">
			<div class="header clear"><h2><img :src="articleData.author_face" alt=""/></h2><p>残留的眼泪</p></div>
		    <div class="cont">
		    	<h3>{{articleData.title}}</h3>
		        <div class="time"><p>{{articleData.time | Time}} <span><img src="../../assets/img/zan.png" alt=""/></span></p></div>
		        <div id="p1" class="text-box" v-html="articleData.content"></div>
		    </div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				articleData:{}
			}
		},
		mounted(){
			var reg=/\/article\/(\d+)/;
			var id=this.$route.path.match(reg)[1];
			console.log(id)
			this.fetchData(id);
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('../src/data/article.data').then(function(res){
					_this.articleData=res.data[id-1];
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
		html,body{
			overflow-x: hidden;
		}
		#p1{
			line-height:1.5; margin-bottom:0.1rem;
			text-indent: 2em;
			margin: 10px;
		}
		.nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
		.nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
		.nav ul li{width:0.29rem;height:0.31rem; background:url(../../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}
		
		.content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
		.content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background:none;}
		.header h2{ float:left; margin-right:0.18rem;}
		.header h2>img{
			width:1rem;
			height:0.6rem;
		}
		.header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
		
		.content .cont{ padding:0 0.38rem; color:#494d4d;}
		.cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
		.cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; font-size:0.5rem;}
		.time p{ float:left;position:relative;}
		.time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
		.time span img{width:100%;height:100%;}
		
		.cont .text-box{ font-size:0.25rem;}
		
</style>