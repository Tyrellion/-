import VueRouter from 'vue-router'
import MainIndex from '../components/mainIndex.vue'
import SecondIndex from '../components/secondIndex.vue'
import ThirdIndex from '../components/thirdIndex.vue'
import FourthIndex from '../components/fourthIndex.vue'
import AnswerPage from '../components/answerPage.vue'
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
        }
    ]
  })
  
  // 全局前置守卫（这里给出一个简单的鉴权示例）
  // router.beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // })
  
  export default router
  