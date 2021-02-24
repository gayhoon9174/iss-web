<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">{{ product.price }}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'products',
            'saleProducts'
        ])
    },
    methods:{
        // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명이 동일할 때 [] 사용
        ...mapMutations([
            'reducePrice'
        ]),
        // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명을 다르게 매칭할 때 {} 사용
        ...mapMutations({
            reducePrice: 'reducePrice'  // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
        }),
        // 위 mapGetters, Mutations와 동일한 방식으로 mapActions 또한 사용이 가능하다.
        ...mapActions([
            'reducePrice'
        ])
    }
}
</script>

<style>

</style>
