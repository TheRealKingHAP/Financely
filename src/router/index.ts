import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import OverView from '../views/OverView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import WalletView from '../views/WalletView.vue'
import InvestmentsView from '../views/InvestmentsView.vue'
import IncomesView from '../views/IncomesView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'overview',
        component: OverView,
        props: true
    },
    {
        path: '/expenses',
        name: 'expenses',
        component: ExpensesView,
        props: true

    },
    {
        path: '/incomes',
        name: 'incomes',
        component: IncomesView,
        props: true

    },
    {
        path: '/investments',
        name: 'investments',
        component: InvestmentsView,
        props: true

    },
    {
        path: '/wallet',
        name: 'wallet',
        component: WalletView,
        props: true

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router