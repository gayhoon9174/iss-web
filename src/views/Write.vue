<template>
    <div id="Write">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        <div class="board_header">
            <div class="title">
                <h3>NEW REQUEST</h3>
            </div>
        </div>
        <form @submit.prevent="onSubmit" class="form_design_01">

            <div class="contents_box">
                <ul>
                    <li>
                        <input type="text" v-model="form.subject" placeholder="제목을 입력해 주세요" spellcheck="false" required>
                    </li>
                    <li>
                        <select v-model="form.project" required>
                            <option disabled value="">프로젝트</option>
                            <option>감사원 유지보수</option>
                            <option>전자감사관리시스템 구축</option>
                            <option>실적평가시스템 구축</option>
                        </select>
                    </li>
                    <li>
                        <input type="date" v-model="form.date" required>
                    </li>
                </ul>
            </div>

            <div class="contents_box">
                <ul>
                    <li>
                        <select v-model="form.workTypeFirst" required>
                            <option disabled value="">업무 대분류</option>
                            <option>Design</option>
                            <option>Publish</option>
                        </select>
                    </li>
                    <li>
                        <select v-model="form.workTypeSecond" required>
                            <option disabled value="">업무 중분류</option>
                            <option>PC/Mobile</option>
                            <option>Print</option>
                        </select>
                    </li>
                    <li>
                        <select v-model="form.workTypeThird" required>
                            <option disabled value="">업무 소분류</option>
                            <option>UX</option>
                            <option>UI</option>
                            <option>ETC</option>
                        </select>
                    </li>
                    <li>
                        <select v-model="form.workTypeFourth" required>
                            <option disabled value="">업무 상세분류</option>
                            <option>Interaction</option>
                            <option>User task flow</option>
                            <option>IA</option>
                            <option>Wireframe</option>
                            <option>Prototype</option>
                        </select>
                    </li>
                    <!-- <li>
                        <div class="section_control_btn">
                            <button type="button" class="scb_minus">-</button>
                            <button type="button" class="scb_plus">+</button>
                        </div>
                    </li> -->
                </ul>
                <ul>
                    <li>
                        <textarea v-model="form.workDetail" placeholder="상세 요청 내용을 작성해 주세요" spellcheck="false" required></textarea>
                    </li>
                </ul>
            </div>
            
            <div class="page_btn">
                <button type="submit" class="color_point"><i class="apply">icon</i>Apply</button>
            </div>
            
        </form>
    </div>
</template>

<script>
import LeftMenu from '@/components/Layout/LeftMenu'
import { createUser } from '@/firebase'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'Write',
    components:{
        LeftMenu
    },
    setup() {
        const router = useRouter()

        const form = reactive({
            subject: '',
            project: '',
            date: '',
            workTypeFirst: '',
            workTypeSecond: '',
            workTypeThird: '',
            workTypeFourth: '',
            workDetail: '',
        })        
        const onSubmit = async () => {
            await createUser({ ...form })
            router.push(`/all`)
        }
        return { form, onSubmit }
    },
    data: () => ({
    }),
    methods: {
        submitted() {
			this.isSubmitted = true;
		},
        post(){
            this.$firebase.firestore().collection('notes').set({            
                subject: this.subject,
                project: this.project,
                date: this.date,
                workTypeFirst: this.workTypeFirst,
                workTypeSecond: this.workTypeSecond,
                workTypeThird: this.workTypeThird,
                workTypeFourth: this.workTypeFourth,
                workDetail: this.workDetail,
            })
            this.title = ''
            this.content = ''
        }
    }
}
</script>

<style lang="scss" scoped>
#Write{
    width:300px;
    height:100%;
    float:left;
}
</style>