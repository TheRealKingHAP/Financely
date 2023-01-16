<template>
<div class="expenses-table-component">
    <table class="expenses-table">
        <thead>
            <tr>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in transactions" :key="index">
                <td>{{item.title}}</td>
                <td>{{formatNumber.format(item.amount)}}</td>
                <td>{{item.details.length > 0 ? item.details : 'No hay descripción'}}</td>
                <td>{{item.date.day}}-{{item.date.month}}-{{item.date.year}}</td>
                <td><font-awesome-icon class="delete-expense-button" icon="fa-solid fa-trash-can"/></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Transaction } from '../../types/Transaction';

export default defineComponent({
    props:{
        transactions: {
            type: Array as PropType<Transaction[]>,
            required: true
        }
    },
    setup(props){
        const formatNumber = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        });

        return{formatNumber}
    }
})
</script>