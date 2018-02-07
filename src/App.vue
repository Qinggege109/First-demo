<template>
  <div id="app">
    <loading></loading>
    <Nav v-show="contentShow"></Nav>
      <transition name="slide-down">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
     <Foot></Foot>
  </div>
</template>
<style>
	.slide-down-enter-active,
	.slide-down-leave-active{
		transition: .5s all ease;
		opacity:0.2;
		transform: translate3d(0,3em,0);
	}
	.slide-down-enter,
	.slide-down-leave{
		opacity:1;
		transform: translate3d(0,3em,0);
	}
</style>
<script>
import Nav from './components/Nav/Nav.vue'
import Foot from './components/Foot/Foot.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      Nav,
      Foot
  },
  computed:mapGetters([
    "contentShow"
  ]),
  watch:{
    $route(to,from){
      if(to.path=='/user-info' || to.path=="/login" || to.path=="/reg"){
        this.$store.dispatch('contentHide')
      }else{
        this.$store.dispatch('contentShow')
      }
    }
  }
}
</script>
