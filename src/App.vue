<template>
  <div v-if="account" class="app">
    <nav class="SideBar" :class="{expanded: isExpanded}">
      <div class="expand-sidebar-button" :class="{expanded: isExpanded}">
        <font-awesome-icon class="sidebar-close-icon" :class="{expanded: isExpanded}" icon="fa-solid fa-angles-left" @click="isExpanded = !isExpanded"/>
      </div>
      <div v-if="isExpanded" class="logo">Financely</div>
      <div class="profile-tile">
        <p style="color: #999999">Account</p>
        <div class="account-card">
          <img class="profile-pic" :src="account.profilePic" />
          <p>{{account.name}}</p>
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/">
          <font-awesome-icon class="icon" icon="fa-solid fa-home"/>
          <span>Overview</span>
          </router-link>
        <router-link to="/expenses">
          <font-awesome-icon class="icon" icon="fa-solid fa-money-bill-transfer"/>
          <span>Expenses</span>
        </router-link>
        <router-link to="/incomes">
          <font-awesome-icon class="icon" icon="fa-solid fa-hand-holding-dollar"/>
          <span>Incomes</span>
        </router-link>
        <router-link to="/investments">
          <font-awesome-icon class="icon" icon="fa-solid fa-arrow-trend-up"/>
          <span>Investments</span>
        </router-link>
        <router-link to="/wallet">
          <font-awesome-icon class="icon" icon="fa-solid fa-wallet"/>
          <span>Wallet</span>
        </router-link>
      </div>
    </nav>
    <div class="BodyView">
    <router-view :user="account" :formatNumber="formatNumber" />
    </div>
  </div>
  <div v-else class="loadingScreen">
    <h3>Financely</h3>
    <font-awesome-icon class="spinner" icon="fa-solid fa-circle-notch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { User } from './types/User';
  export default defineComponent({
    setup(){
      let account = ref<User>();
      const isExpanded = ref(true);
      onMounted(async () => {
          await fetch('http://localhost:3000/users/1')
          .then((res) => res.json())
          .then((data) => account.value = data)
          .catch((err) => console.log(err.message));
      });
      const formatNumber = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2
      });
      return {account, isExpanded, formatNumber}
    }
  })
</script>
