<template>
  <Campgrounds />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Campgrounds from '@/components/Campgrounds/Campgrounds.vue';

@Component({
  components: { Campgrounds },
})
export default class Campground extends Vue {}
</script>
