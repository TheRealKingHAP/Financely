<template>
<div class="InvestmentsView">
    <h1>Investments</h1>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '../types/User';

    export default defineComponent({
        props: {
            user: {
            type: Object as PropType<User>,
            required: true
            },
        }
    })
</script>