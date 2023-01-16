<template>
    <div v-if="user">
        <h1>Wallet</h1>
        <ul class="wallet-list">
            <li v-for="(item, index) in user.data.wallet" :key="index">{{index}}: <span>{{formatNumber.format(item)}}</span></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { User } from "../types/User";
    export default defineComponent({
        props:{
            user: {
                type: Object as PropType<User>,
                required: true
            },
            formatNumber: {
                type: Intl.NumberFormat,
                required: true
            }
        },
    })
</script>