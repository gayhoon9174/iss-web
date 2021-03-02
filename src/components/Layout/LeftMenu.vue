<template>
    <div class="lnb_wrap">
        <h1><img :src="require('@/assets/images/lnb_logo_top.png')" alt="ISS 로고"></h1>
        <div class="menu_wrap">
            <div class="user_area">
                <div class="user_thumb">
                    <img :src="require('@/assets/images/profile_default.png')">
                </div>
                <div class="user_info">
                    <h3 class="user_name">{{ getUserInfo("name") }}{{ userInfo.first_name }} 선임</h3>
                    <p class="user_team">감사원유지보수팀</p>
                </div>
                <button @click="logout"></button>
            </div>
            <nav>
                <ul>

                    <router-link to="/write" custom v-slot="{ navigate, isActive }" exact>
                        <li @click="navigate" @keypress.enter="navigate" role="link" class="lnbtn_write" :class="[isActive && 'active']">WRITE</li>
                    </router-link>
                    
                    <router-link :to="{name:'all'}" custom v-slot="{ navigate, isActive }" exact>
                        <li @click="navigate" @keypress.enter="navigate" role="link" :class="[isActive && 'active']">ALL</li>
                    </router-link>
                    <router-link :to="{name:'requested'}" custom v-slot="{ navigate, isActive }" exact>
                        <li @click="navigate" @keypress.enter="navigate" role="link" :class="[isActive && 'active']">REQUESTED</li>
                    </router-link>
                    <router-link :to="{name:'completed'}" custom v-slot="{ navigate, isActive }" exact>
                        <li @click="navigate" @keypress.enter="navigate" role="link" :class="[isActive && 'active']">COMPLETED</li>
                    </router-link>
                </ul>
            </nav>
        </div>
        <h2><img :src="require('@/assets/images/lnb_logo_bottom.png')" alt="Unfine 로고"></h2>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
    data:() => ({
        drawer: null
    }),
    computed:{
        ...mapState(['userInfo']),
        ...mapGetters(['getUser'])
    },
    props:{
        source: String
    },
    methods : {
        getUserInfo(keyname) {
            if( this.getUser == null ) {
                return "";
            }

            if( keyname == null || keyname === "") {
                return "";
            }

            return (this.getUser[keyname]!=null)?this.getUser[keyname]:"";
        },
        logout() {
            this.$store.dispatch('logout'); //dispatch는 actions 실행할때 사용
            this.$router.push({ name: "Login" })
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';

.lnb_wrap{
    display:flex;
    position:relative;
    height:100%;
    align-items: center;

    h1{
        position:absolute;
        width:100%;
        top:60px;
        left:0;
        text-align: center;
    }
    .menu_wrap{
        position:relative;
        display:block;
        width:100%;
        padding:0 30px;
        box-sizing: border-box;
        
        .user_area{
            position:relative;
            display: block;
            overflow: hidden;
            margin-bottom:30px;

            &::after{
                display:inline-block;
                content: '';
                clear:both;
            }

            .user_thumb{
                float:left;
                margin-right:15px;
            }

            .user_info{
                float:left;
                margin-top:4px;
                
                .user_name{
                    font-size:18px;
                    color:#786685;
                    font-weight:400;
                }

                .user_team{                    
                    font-size:14px;
                    color:#C6BCCC;
                    font-weight:400;
                }
            }

            button{
                position:absolute;
                top:calc(50% - 15px);
                right:0;
                width:30px;
                height:30px;
                display:inline-block;
                background:url('../../assets/images/logout_icon.png') no-repeat center center;
                opacity: 0.6;

                &:hover{
                    opacity: 1;
                }
            }
        }

        nav{
            ul{
                li{
                    display:flex;
                    width:100%;
                    height:60px;
                    background:#fff;
                    align-items: center;
                    justify-content: center;
                    border-radius: 30px;
                    margin-bottom:20px;
                    /* offset-x | offset-y | blur-radius | spread-radius | color */
                    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
                    cursor: pointer;
                    font-family: Audiowide, sans-serif;
                    font-size:16px;
                    color:#8B8B8B;
                    box-sizing: border-box;
                    /* 드래그 방지 */
                    -ms-user-select: none; 
                    -moz-user-select: -moz-none; 
                    -webkit-user-select: none; 
                    -khtml-user-select: none; 
                    user-select:none;

                    &.active{
                        border:1px solid $main_color;
                        color:$main_color;
                    }

                    &:hover{
                        border:1px solid $main_color;
                        color:$main_color;
                    }

                    &.lnbtn_write{
                        background:$main_color;
                        color:$white_color;
                    }
                }
            }
        }
    }
    h2{
        position:absolute;
        width:100%;
        bottom:60px;
        left:0;
        text-align: center;
    }
}

</style>
