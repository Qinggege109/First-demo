<template lang="">
    <div id="nav">
         <ul class="list">
             <router-link tag="li" to="/home" active-class="active">
                <a href="javascript:;">首页</a>
             </router-link>
             <router-link tag="li" to="/folow" active-class="active">
                <a href="javascript:;">关注</a>
             </router-link>
             <router-link tag="li" to="/column" active-class="active">
                <a href="javascript:;">栏目</a>
             </router-link>
         </ul>
    </div>
</template>
<style scoped>
 .list{
    width: 4.38rem;
    height: 0.6rem;
    margin: 0 auto;
 }
 .list li{
    width: 1.46rem;
    height: 0.6rem;
    float: left;
 }
 .list li a{
    display: block;
    width: 1.46rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.3rem;
    color: #9e9a95;
 }
 .list li.active a{
    height: 0.5rem;
    border-bottom: 0.1rem solid #5477b2;
    color: #5477b2;
 }
</style>