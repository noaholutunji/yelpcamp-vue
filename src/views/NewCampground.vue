<template>
  <NewCampground />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NewCampground from '@/components/NewCampground/NewCampground.vue';

@Component({
  components: { NewCampground },
})
export default class NewCampgroundForm extends Vue {}
</script>
