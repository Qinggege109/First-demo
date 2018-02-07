import Home from '../components/Home/Home.vue'
import Folow from '../components/Folow/Folow.vue'
import Column from '../components/Column/Column.vue'
import UserInfo from '../components/User/UserInfo.vue'
import Article from '../components/Home/Article.vue'
import Login from '../components/Login/Login.vue'
import Reg from '../components/Reg/Reg.vue'
export default [{
    path: '/home',
    component: Home
}, {
    path: '/folow',
    component: Folow
}, {
    path: '/column',
    component: Column
}, {
    path: "/",
    redirect: '/home'
}, {
    path: '/user-info',
    component: UserInfo
}, {
    path: '/article/:id',
    component: Article
}, {
    path: '/login',
    component: Login
}, {
    path: '/reg',
    component: Reg
}]