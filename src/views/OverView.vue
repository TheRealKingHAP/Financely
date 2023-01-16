<template>
<div v-if="Object.keys(user).length > 0" class="">
    <h1>{{greetings}} {{user.name}}</h1>
    <WalletCard :wallet="user.data.wallet" :title="'Bank'" :formatNumber="formatNumber" />
</div>
<div v-else>
    <h1>Loading .... </h1>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import WalletCard from "../components/wallet/WalletCard.vue";
import { User } from "../types/User";
    export default defineComponent({
    components: {WalletCard},
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        },
        formatNumber: {
            type: Intl.NumberFormat,
            required: true,
        }
    },
    setup(props) {
        let greetings = ref<string>("Hi! ");
        return { greetings };
    },
})
</script>