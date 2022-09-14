<template>
  <Landing />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Landing from '@/components/Landing/Landing.vue';

@Component({
  components: { Landing },
})
export default class Home extends Vue {}
</script>
