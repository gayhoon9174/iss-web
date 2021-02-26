import { createWebHistory, createRouter } from "vue-router";
import store from '../store/store'

const rejectAuthUser = (to, from, next) => { 
    console.log(store)
    if(store.state.isLogin === true) {
        // 이미 로그인 된 유저니까 막아야 한다.
        alert("이미 로그인을 하였습니다.")
        next("/")        
    } else {
        next()
        
    }
}

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
        import('@/views/Home.vue')
    },
    {
        path: "/login",
        name: "Login",
        beforeEnter: rejectAuthUser,
        component: () =>
        import('@/views/Login.vue')
    },
    {
        path: "/mypage",
        name: "mypage",
        component: () =>
        import('@/views/Mypage.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
