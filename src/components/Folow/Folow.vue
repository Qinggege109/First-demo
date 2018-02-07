<template lang="">
    <div id="folow">
         <div class="newsList">
            <ul>
                <li v-for="(item,index) in arr">
                    <a href="#">
                        <h2>{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </a> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arr:[]
            }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                var _this=this;
                this.$http.get("src/data/follow.data").then(function(res){
                    console.log(res.data);
                    _this.arr=res.data
                }).catch(function(err){
                    alert("出错了")
                })
            }
        }
    }
</script>
<style scope>
.content,a{
    font-size:12px;
    color:#666;
}
.content .newsList {
    width: 6.4rem;
    margin: 0 auto;
}

.newsList ul {
    padding: 0 0.4rem;
}

.newsList ul li {
    color: #494d4d;
    padding: 0.2rem 0;
    border-bottom: 1px dashed #ccc;
}

.newsList ul li h2 {
    max-height: 0.9rem;
    font-size: 0.33rem;
    overflow: hidden;
}

.newsList ul li p {
    max-height: 1.8rem;
    margin-top: 0.05rem;
    overflow: hidden;
}
</style>