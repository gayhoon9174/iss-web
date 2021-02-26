import {createStore} from 'vuex';    //vuex를 불러온다
import router from '@/router'
import axios from "axios"

export default createStore({   //store라는 변수를 만들고 그 변수에 Vuex의 Store에 이제 뭔가를 넣는다. 그리고 이걸 어딘가로 보낼(export) 준비해
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
        },
        isLogin(state) {
            return state.isLogin;
        },
        isLoginError(state) {
            return state.isLoginError;
        },
        getUser(state) {
            return state.userInfo;
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
        login({ commit }, siginObj){
            axios
                .post("https://reqres.in/api/login", siginObj)  //post방식의 뒤에 인자는 파라메터(body)
                //성공했을 경우
                .then(res => {
                    // 성공 시 token: ~~ (실제로는 user_id 값을 받아올건데 지금은 서버개발이 안되어있으니...상상만 ㅎ)
                    // 토큰을 헤더에 포함시켜서 유저 정보를 요청
                    // config에서 헤더값을 설정해줄 수 있고, 헤더내에 토큰을 포함시키기 위해 필요
                    let token = res.data.token
                    let config = {
                        headers: {
                            "access-token": token
                        }
                    }
                    //위에서 설정한 token값을 받기위해 이번엔 get 방식으로 다시 한번 서버에 요청한다.
                    axios
                        .get("https://reqres.in/api/users/2", config)   //위에 설정한 headers를 갖고있는 config에 담아 보낸다, get방식은 뒤에오는 인자가 파라메터가 아닌 보안관련임
                        .then(response => {
                            let userInfo = {
                                id: response.data.data.id,
                                first_name: response.data.data.first_name,
                                last_name: response.data.data.last_name,
                                avatar: response.data.data.avatar
                            }
                            commit("loginSuccess", userInfo)    //loginSuccess로 지정한 mutations를 commit해라
                            router.push({ name: "mypage" })
                        })
                        .catch(() =>{
                            alert('이메일과 비밀번호를 확인하세요')
                        })
                })
                //실패했을 경우
                .catch(() => {
                    alert('이메일과 비밀번호를 확인하세요')
                })


            // let selectedUser = null // 사용자가 입력한 유저 변수를 지정해서 null일때와 그렇지 않을때를 비교하는 방식으로 진행한다
            // state.allUsers.forEach(user => { //  allUsers를 반복하고 반복되는 각각의 정보는 user라고 지정한다.
            //     if(user.email === siginObj.email) selectedUser = user   //만약 user의 email이 반복중이던 allUsers의 정보와 일치한다면 user를 selectedUser에 담는다
            // })
            // if (selectedUser === null || selectedUser.password !== siginObj.password)
            //     commit('loginError')
            // else{
            //     commit('loginSuccess', selectedUser)  
            // }                
        },
        // 로그아웃 시도
        logout({ commit }) {
            commit("logout")
            router.push({ name: "Login" })
        }
    }
})
