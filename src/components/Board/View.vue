<template>
    <div>
        <form @submit.prevent="update" class="form_design_01">

            <div class="contents_box">
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

            <div class="contents_box">
                <ul>
                    <li>
						<p>{{ form.workTypeFirst }}</p>
                    </li>
                    <li>
						<p>{{ form.workTypeSecond }}</p>
                    </li>
                    <li>
						<p>{{ form.workTypeThird }}</p>
                    </li>
                    <li>
						<p>{{ form.workTypeFourth }}</p>
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
						<p>{{ form.workDetail }}</p>
                    </li>
                </ul>
            </div>
            
            <div class="page_btn">				
				<router-link :to="`/modify/${form.docKey}`">
					<button type="submit" class="color_point"><i class="apply">icon</i>Modify</button>
				</router-link>
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
            router.push('/all')
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
