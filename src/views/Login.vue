<template>
    <div id="Login">        
        <div class="login_wrap">
            <div class="login_left">
                <div class="login_cont">
                    <div class="login_cont_logo">
                        <img :src="require('@/assets/images/login/login_logo.png')" alt="logo">
                    </div>
                    <div class="login_cont_form">
                        <form>
                            <ul>
                                <li>
                                    <input type="text" class="form_id" placeholder="E-Mail" v-model="email">
                                </li>
                                <li>
                                    <input type="password" class="form_pw" placeholder="PW" v-model="password">
                                </li>
                                <li class="fail_message" v-if="isLoginError">
                                    아이디와 비밀번호를 확인해주세요
                                </li>
                                <li>
                                    <input type="button" value="LOGIN" @click="login({
                                        email: email,   // 인자 email: v-model에서 설정한 email
                                        password: password  // 인자 password: v-model에서 설정한 password
                                    })">
                                </li>
                                <li class="fail_message" v-if="isLogin">
                                    로그인이 완료되었습니다
                                </li>
                            </ul>
                        </form>
                        <div class="after_login" v-if="isLogin">
                            로그인 되면 본 화면이 보입니다.
                        </div>
                        <div class="before_login" v-else>
                            로그인을 해주세요
                        </div>
                    </div>
                    <div class="account_set">
                        <a>Create account</a>
                        <a>Find password</a>
                    </div>
                    <div class="bottom_logo">
                        <img :src="require('@/assets/images/login/login_bottom_logo.png')">
                    </div>
                </div>
            </div>
            <div class="login_right">dd</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    components:{
    },
    name: 'Login',
    data () {
        return{
            email: null,
            password: null,
        }
    },
    computed:{
        ...mapGetters(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"]),
        //login() {
            // let selectedUser = null // 사용자가 입력한 유저 변수를 지정해서 null일때와 그렇지 않을때를 비교하는 방식으로 진행한다
            // this.allUsers.forEach(user => { //  allUsers를 반복하고 반복되는 각각의 정보는 user라고 지정한다.
            //     if(user.email === this.email) selectedUser = user   //만약 user의 email이 반복중이던 allUsers의 정보와 일치한다면 user를 selectedUser에 담는다
            // })
            // selectedUser === null
            //     ? (this.mailError = true, this.pwError = false)
            //     : selectedUser.password !== this.password
            //         ? (this.mailError = false, this.pwError = true)
            //         : (this.loginSuccess = true, this.mailError = false, this.pwError = false)
        //}
        
        
        // login(siginObj) {
        //     this.$store.dispatch("login", siginObj);
        //     this.$router.push({ name: "mypage" });
        // }
    }
}
</script>

<style lang="scss" scoped>
$font-color-gray: #B8BCC1;
$font-color-gray-hover: #8E9298;

#Login{height:100%;}

.login_wrap{
    width:100%;
    height:100%;
    background: rgb(141,37,219);
    background: radial-gradient(circle, rgba(141,37,219,1) 0%, rgba(87,0,58,1) 100%);

    .login_left{
        width:40%;
        height:100%;
        background:#fff;
        float:left;
        display:inline-flex;
        align-items: center;
        justify-content: center;

        .login_cont{
            
            .login_cont_logo{
                margin-bottom:80px;
            }

            .login_cont_form{

                li{
                    margin-bottom:20px;
                }

                input[type='text'],
                input[type='password']{
                    width:220px;
                    height:60px;
                    border-radius: 20px;
                    background:#F5F3F9;
                    border:0px;
                    box-sizing: border-box;
                    font-size:15px;
                    padding-left:70px;
                    color:#786685;
                    letter-spacing: 1px;
                }

                input[type='text']:hover,
                input[type='password']:hover{
                }

                input[type='text']::placeholder,
                input[type='password']::placeholder{
                    color:#D6CEDC;
                    
                }

                input[type='button']{
                    margin-top:30px;
                    width:220px;
                    height:60px;
                    border-radius: 50px;
                    background:#791CBF;
                    color:#fff;
                    font-family: 'Audiowide', sans-serif;
                }
            }

            .account_set{
                margin-top:50px;
                
                a{
                    display:block;
                    font-size:15px;
                    color:$font-color-gray;
                    margin-bottom:15px;
                }
                a:last-child{
                    margin-bottom:0;
                }
                a:hover{
                    color:$font-color-gray-hover;
                }
            }

            .bottom_logo{
                margin-top:100px;
            }
        }
    }

    .login_right{
        width:60%;
        height:100%;
        float:left;
    }
}





</style>
