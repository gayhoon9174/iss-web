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
        name: "all",
        component: () =>
        import('@/views/All.vue')
    },
    {   
        path: "/login",
        name: "Login",
        beforeEnter: rejectAuthUser,
        component: () =>
        import('@/views/Login.vue')
    },
    {
        path: "/write",
        name: "write",
        component: () =>
        import('@/views/Write.vue')
    },
    {   
        path: "/all",
        name: "all",
        component: () =>
        import('@/views/All.vue')
    },
    {   
        path: "/requested",
        name: "requested",
        component: () =>
        import('@/views/Requested.vue')
    },
    {
        path: "/completed",
        name: "completed",
        component: () =>
        import('@/views/Completed.vue')
    },
    //게시판
    {
        path: "/list",
        name: "list",
        component: () =>
        import('@/components/Board/List.vue')
    },
    {
        path: "/view",
        name: "view",
        component: () =>
        import('@/components/Board/View.vue')
    },
    {
        path: "/modify/:id",
        name: "modify",
        component: () =>
        import('@/components/Board/Modify.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
