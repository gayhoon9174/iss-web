<template>
    <div>
        <form class="form_design_01">

            <div class="contents_box view_title">
                <ul>
                    <li>
						<span>제목</span>
						<p>{{ form.subject }}</p>
                    </li>
                    <li>
						<span>프로젝트</span>
						<p>{{ form.project }}</p>
                    </li>
                    <li>
						<span>처리 희망일</span>
						<p>{{ form.date }}</p>
                    </li>
                </ul>
            </div>
            <div class="contents_box work_type_wrap">
                <div class="work_type_head">
                    <ul>
                        <li>
                            <span>{{ form.workTypeFirst }}</span>
                        </li>
                        <li>
                            <span>{{ form.workTypeSecond }}</span>
                        </li>
                        <li>
                            <span>{{ form.workTypeThird }}</span>
                        </li>
                        <li>
                            <span>{{ form.workTypeFourth }}</span>
                        </li>
                    </ul>
                </div>
                <div class="work_type_body">
                    <ul>
                        <li>
                            <textarea v-model="form.workDetail" readonly></textarea>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="page_btn">	
                <router-link :to="{name:'all'}">
					<button type="button"><i class="list">icon</i>List</button>
				</router-link>			
				<router-link :to="`/modify/${form.docKey}`">
					<button type="button"><i class="modify">icon</i>Modify</button>
				</router-link>
				<button type="button" @click="deleteWork"><i class="delete">icon</i>Delete</button>
            </div>
            
        </form>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, deleteUser } from '@/firebase'


export default {
    setup () {
        const router = useRouter()
        const route = useRoute()
        const userId = computed(() => route.params.id)

        const form = reactive({ //reactive는 data(vue3에서는 setup을 사용)나 method, computed 등을 선언하게 되면 반응형임을 명시적으로 선언해주는 것(vue3 신규 적용)
            docKey: '',
			subject: '',
            project: '',
            date: '',
            workTypeFirst: '',
            workTypeSecond: '',
            workTypeThird: '',
            workTypeFourth: '',
            workDetail: ''
        })
        onMounted(async () => {
            const user = await getUser(userId.value)
			form.docKey = userId.value
            form.subject = user.subject
            form.project = user.project
            form.date = user.date
            form.workTypeFirst = user.workTypeFirst
            form.workTypeSecond = user.workTypeSecond
            form.workTypeThird = user.workTypeThird
            form.workTypeFourth = user.workTypeFourth
            form.workDetail = user.workDetail
        })

        const deleteWork = async () => {
            await deleteUser(form.docKey)
            router.push(`/all`)
        }

        return { form, deleteWork, deleteUser }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';

.form_design_01{
    .contents_box.view_title{
        ul{
            li{
                position:relative;

                &::after{
                    position:absolute;
                    right:0;
                    top:0;
                    display:inline-block;
                    content: '';
                    width:1px;
                    height:100%;
                    background: $board_line_color;
                }

                &:last-child::after{
                    display:none;
                }

                span{
                    display: block;
                    font-size:12px;
                    color: $board_view_subtitle_color;
                    margin-bottom:4px;
                }

                p{
                    font-size:15px;
                    color: $default_font_color;
                }
            }
        }
    }

    .contents_box.work_type_wrap{
        padding:0;
        border-radius: initial;
        background:initial;

        .work_type_head{
            background: $main_color;
            padding:20px 30px;
            color:$white_color;
            font-size:$default_font_size;
            border-radius: 20px 20px 0 0;

            ul{

                li{
                    flex:initial;
                    margin-right:0;

                    &::after{
                        position:relative;
                        float:right;
                        content: '';
                        width:7px;
                        height:5px;
                        background:url("~@/assets/images/board_work_arrow.png") no-repeat center center;
                        margin:9px 30px 0 30px;
                    }

                    &:last-child::after{
                        display:none;
                    }
                }
            }
        }

        .work_type_body{
            border:1px solid $main_color;
            border-radius: 0 0 20px 20px;
            padding:40px 30px;
            font-size:$default_font_size;
            color:$default_font_color;
            background:$white_color;

            ul{

                li{

                    textarea:read-only{
                        background: $white_color;
                        padding:0;
                        border:0;
                    }
                }
            }
        }
    }
}
</style>
