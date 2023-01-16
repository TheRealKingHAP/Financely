<template>
<div class="expenses-view">
    <h1>Expenses</h1>
    <TransactionsTable :transactions="expenses" />
    <div class="total">
        <p>Total: <span>{{formatNumber.format(total)}}</span></p>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import { User } from '../types/User';
import { Transaction } from '../types/Transaction';
import TransactionsTable from '../components/transactions/TransactionsTable.vue';

    export default defineComponent({
    components: { TransactionsTable },
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        },
        formatNumber:{
            type: Intl.NumberFormat,
            required: true
        }
    },
    setup(props) {
        let expenses = ref<Transaction[]>(props.user.data.expenses);
        let total = ref<number>(0);
        onMounted(() => {
            const expendTotal = expenses.value.reduce((acc, object) => {
                return acc + object.amount;
            }, 0);
            total.value = expendTotal;
            return expendTotal;
        });
        return { expenses, total };
    },

})
</script>