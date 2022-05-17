import VueRouter from 'vue-router'
import MainIndex from '../components/mainIndex.vue'
import SecondIndex from '../components/secondIndex.vue'
import ThirdIndex from '../components/thirdIndex.vue'
import FourthIndex from '../components/fourthIndex.vue'
import AnswerPage from '../components/answerPage.vue'
import LieBao from '../view/LieBao.vue'
import HaiTun from '../view/HaiTun.vue'
import HuoLong from '../view/HuoLong.vue'
import KaoLa from '../view/KaoLa.vue'
import HaiXing from '../view/HaiXing.vue'
import MaoMi from '../view/MaoMi.vue'

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/MainIndex',//设置默认指向的路径
            name: '主页'
            }, {
            path: '/MainIndex',//设置默认指向的路径指向的是下面的MyHome组件
            component: MainIndex,
            name: 'MainIndex'
            },
        {
            path:'/SecondIndex',
            component:SecondIndex
        },
        {
            path:'/ThirdIndex',
            component:ThirdIndex
        },
        {
            path:'/FourthIndex',
            component:FourthIndex
        },
        {
            path:'/AnswerPage',
            component:AnswerPage
        },
        {
            path:'/LieBao',
            component:LieBao
        },
        {
            path:'/HaiTun',
            component:HaiTun
        },
        {
            path:'/MaoMi',
            component:MaoMi
        },
        {
            path:'/HaiXing',
            component:HaiXing
        },
        {
            path:'/HuoLong',
            component:HuoLong
        },
        {
            path:'/KaoLa',
            component:KaoLa
        },
        
    ]
  })
  
  // 全局前置守卫（这里给出一个简单的鉴权示例）
  // router.beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // })
  
  export default router
  