<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Navigation/Navigation.vue';
export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
  },
};
</script>

<style></style>
