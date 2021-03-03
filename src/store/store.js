import {createStore} from 'vuex';    //vuex를 불러온다
import router from '@/router'
import axios from "axios"

export default createStore({   //store라는 변수를 만들고 그 변수에 Vuex의 Store에 이제 뭔가를 넣는다. 그리고 이걸 어딘가로 보낼(export) 준비해
    state:{ //state는 vuex에서 기본상태값이라고 보면된다. 여기에다 이제 뭘 넣는다.
        userInfo: null,
        allUsers: [
            { id: 1, name: "ghoon", email: "ghoon@gmail.com", password: "123456", personality: "매우 착하다" },
            { id: 2, name: "kang", email: "kang@gmail.com", password: "456789", personality: "좋다" }
        ],
        isLogin: false,
        isLoginError: false,
        dataInfo: null,
        totalPage: null,
        pageNum: 1
    },
    getters:{   //getter는 vuex에서 state를 수정할 수 있는 영역으로 보면된다.
        isLogin(state) {
            return state.isLogin;
        },
        isLoginError(state) {
            return state.isLoginError;
        },
        getUser(state) {
            return state.userInfo;
        },
        getDataInfo(state){
            return state.dataInfo;
        }
    },
    mutations:{
        // 로그인이 성공했을 때
        loginSuccess(state, payload){
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
            router.push({ name: "all" })
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
            localStorage.removeItem("access_token")            
            router.push({ name: "Login" })
        },
        //데이터정보받았을때
        getDataInfoSuccess(state, payload){
            state.dataInfo = payload
        }
    },
    actions:{
        // 로그인 시도
        login({ dispatch }, siginObj){
            // 로그인 -> 토큰 반환
            axios
                .post("https://reqres.in/api/login", siginObj)  //post방식의 뒤에 인자는 파라메터(body)
                .then(res => {
                    // 성공 시 token: ~~ (실제로는 user_id 값을 받아올건데 지금은 서버개발이 안되어있으니...상상만 ㅎ)
                    // 토큰을 헤더에 포함시켜서 유저 정보를 요청
                    // config에서 헤더값을 설정해줄 수 있고, 헤더내에 토큰을 포함시키기 위해 필요
                    let token = res.data.token    
                    // 토큰을 로컬스토리지에 저장
                    localStorage.setItem("access_token", token) // 받아온 토큰을 로컬스토리지에 access_token이라는 속성에 token을 값으로 저장하겠다
                    dispatch("getMemberInfo")
                })
                //실패했을 경우
                .catch(() => {
                    alert('이메일과 비밀번호를 확인하세요')
                })
        },
        // 로컬스토리지에 토큰 저장 및 통신하여 사용자 정보 저장
        getMemberInfo({ commit }) {
            // 로컬스토리지에 저장된 토큰을 불러온다
            let token = localStorage.getItem("access_token")
            let config = {
                headers: {
                    "access-token": token
                }
            }
            // 위에서 설정한 token값을 받기위해 이번엔 get 방식으로 다시 한번 서버에 요청한다.
            // 새로고침 -> 토큰만 가지고 멤버정보를 요청
            axios
                .get("https://reqres.in/api/users/2", config)   //위에 설정한 headers를 갖고있는 config에 담아 보낸다, get방식은 뒤에오는 인자가 파라메터가 아닌 보안관련임
                .then(response => {
                    let userInfo = {
                        id: response.data.data.id,
                        first_name: response.data.data.first_name,
                        last_name: response.data.data.last_name,
                        avatar: response.data.data.avatar
                    }
                    commit("loginSuccess", userInfo)
                })
                .catch(() =>{
                    alert('이메일과 비밀번호를 확인하세요')
                })
        },
        // 로그아웃 시도
        logout({ commit }) {
            commit("logout")            
        },
        //게시판list 데이터 commit 할때 가져오기
        getDataList(pageNum) {
			axios
                .get("https://reqres.in/api/users?page=2" + pageNum)            
                .then(res => {
                    this.state.dataInfo = res.data.data
                    this.state.totalPage = res.data.total
                    // let dataInfo = res.data.data
                    // commit("getDataInfoSuccess", dataInfo)
                })
                .catch(err => {
                    console.log(err)
                })
		},
    }
})
