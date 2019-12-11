<template>
  <EditCampground />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import EditCampground from '@/components/EditCampground/EditCampground.vue';

@Component({
  components: { EditCampground },
})
export default class EditCampgroundForm extends Vue {}
</script>
