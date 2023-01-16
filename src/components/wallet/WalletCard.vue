<template>
<div class="wallet-card">
    <select class="wallet-keys" v-model="selection">
        <option v-for="(item, index) in getWalletKeys()" :value="item" :key="index">{{item}}</option>
    </select>
    <div class="amount">
        <font-awesome-icon class="icon"  icon="fa-solid fa-wallet" />
        <p>{{formatNumber.format(wallet[selection])}}</p>
    </div>
    <div>
        <p>...</p>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from "vue";
    export default defineComponent({
        props:{
            wallet:{
                type: Object,
                required: true
            },
            title:{
                type: String,
                required: true
            },
            formatNumber:{
                type: Intl.NumberFormat,
                required: true
            }
        },
        setup(props){
            let selection = ref('Bank')
            const getWalletKeys = () => {
                return Object.keys(props.wallet);
            }
            return{selection, getWalletKeys}
        }
    })
</script>