<template>
<div class="incomes-view">
    <h1>Incomes</h1>
    <TransactionsTable :transactions="incomes" />
    <div class="total">
        <p>Total: <span>{{formatNumber.format(total)}}</span></p>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Transaction } from '../types/Transaction';
import { User } from '../types/User';
import TransactionsTable from '../components/transactions/TransactionsTable.vue';

    export default defineComponent({
    components: { TransactionsTable },
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        },
        formatNumber: {
            type: Intl.NumberFormat,
            required: true
        }
    },
    setup(props) {
        let incomes = ref<Transaction[]>(props.user.data.incomes);
        let total = ref<number>(0);
        onMounted(() => {
            const incomesTotal = incomes.value.reduce((acc, object) => {
                return acc + object.amount;
            }, 0);
            total.value = incomesTotal;
            return incomesTotal;
        });
        return { incomes, total };
    },
})
</script>