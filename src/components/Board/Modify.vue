<template>
    <div>
        <form @submit.prevent="update" class="form_design_01">

            <div class="contents_box">
                <ul>
                    <li>
                        <input type="text" v-model="form.subject" placeholder="제목을 입력해 주세요" spellcheck="false">
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
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

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

        const update = async () => {
            await updateUser(userId.value, { ...form })
            router.push('`/all/${form.docKey}`')
            form.subject = ''
            form.project = ''
            form.date = ''
            form.workTypeFirst = ''
            form.workTypeSecond = ''
            form.workTypeThird = ''
            form.workTypeFourth = ''
            form.workDetail = ''
        }

        return { form, update }
    }
}
</script>

<style lang="scss" scoped>
</style>
