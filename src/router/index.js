import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      //登陆
			path: '/login',
			component: resolve => require(['../components/Login.vue'], resolve),
			meta: {
				title: '登陆'
			}
    },
    {
      //主页面
			path: '/main',
			component: resolve => require(['../components/Main.vue'], resolve),
			meta: {
				title: '主页面'
			}
    }
  ]
})
