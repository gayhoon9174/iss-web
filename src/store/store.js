import Vuex from 'vuex';    //vuex를 불러온다
import router from '@/router'

export const store = new Vuex.Store({   //store라는 변수를 만들고 그 변수에 Vuex의 Store에 이제 뭔가를 넣는다. 그리고 이걸 어딘가로 보낼(export) 준비해
    state:{ //state는 vuex에서 기본상태값이라고 보면된다. 여기에다 이제 뭘 넣는다.
        products:[  //products 라는 변수를 또 만든다. (뭘자꾸 만드냐 하...-_-)
            {name:'Bnana Skin', price:20},  //name이라는 변수에 Bnana Skin이라는 문자열(문자열은 ''을 양옆에 넣어야함)을 넣고, price라는 변수에 20을 넣는다.
            {name:'Shiny Star', price:40},
            {name:'Green Shells', price:60},
            {name:'Red Shells', price:80},
        ],
        userInfo: null,
        allUsers: [
            { id: 1, name: "ghoon", email: "ghoon@gmail.com", password: "123456", personality: "매우 착하다" },
            { id: 2, name: "kang", email: "kang@gmail.com", password: "456789", personality: "좋다" }
        ],
        isLogin: false,
        isLoginError: false
    },
    getters:{   //getter는 vuex에서 state를 수정할 수 있는 영역으로 보면된다.
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
                return {
                    name:'**' + product.name + '**',
                    price:product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations:{
        reducePrice: state => {
            state.products.forEach( product => {
                product.price -= 1;
            });
        },
        // 로그인이 성공했을 때
        loginSuccess(state, payload){
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        // 로그인이 실패했을 때
        loginError(state){
            state.isLogin = false
            state.isLoginError = true
        },
        // 로그아웃버튼을 눌렀을 때
        logout(state){
            state.isLogin = false
            state.isLoginError = false
            state.userInfo = null
        }
    },
    actions:{
        reducePrice: context => {
            setTimeout(function(){
                context.commit('reducePrice')
            }, 2000)
        },
        // 로그인 시도
        login({state, commit}, siginObj){
            let selectedUser = null // 사용자가 입력한 유저 변수를 지정해서 null일때와 그렇지 않을때를 비교하는 방식으로 진행한다
            state.allUsers.forEach(user => { //  allUsers를 반복하고 반복되는 각각의 정보는 user라고 지정한다.
                if(user.email === siginObj.email) selectedUser = user   //만약 user의 email이 반복중이던 allUsers의 정보와 일치한다면 user를 selectedUser에 담는다
            })
            if (selectedUser === null || selectedUser.password !== siginObj.password)
                commit('loginError')
            else{
                commit('loginSuccess', selectedUser)
                router.push({ name: "mypage" })                
            }                
        },
        // 로그아웃 시도
        logout({ commit }) {
            commit("logout")
            router.push({ name: "Login" })
        }
    }
})
