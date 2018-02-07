<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>茉莉花香送来夏天的邀请</h2>
                    <p>我们的时光 / TFboys</p>
                </div>
            </li>
            <li><img src="../../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>快乐变得好简单</h2>
                    <p>躲猫猫 / TFboys</p>
                </div>
            </li>
            <li><img src="../../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>我只想给你给你宠爱</h2>
                    <p>宠爱 / TFboys</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default{
		mounted(){
			this.slider();
		},
		methods:{
			slider(){
				$(function (){
					var mySwipe=Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>
<style scoped>
.content .banner {
    position: relative;
    overflow: hidden;
}

.banner ul li {
    width: 6.4rem;
    float: left;
    position: relative;
}

.banner ul li img {
    width: 100%;
    display: block;
}

.banner ul li .text-box {
    width: 5.8rem;
    padding: 0 0.3rem;
    height: 1.24rem;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
}

.text-box h2 {
    font-size: 0.3rem;
    font-weight: normal;
    margin-top: 0.22rem;
    line-height: 100%;
    margin-bottom: 0.22rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.text-box p {
    line-height: 100%;
    font-size:0.3rem;
}

.banner ol {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
}

.banner ol li {
    width: 0.15rem;
    height: 0.15rem;
    background: #5477b2;
    float: left;
    border-radius: 50%;
    margin-right: 0.08rem;
}

.banner ol li.active {
    background: #fff;
}

</style>