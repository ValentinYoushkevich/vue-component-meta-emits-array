<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: String,
  },
  emits: ['open', 'close'],
});
</script>

<template>
  <button @click="$emit('open')">{{ label }}</button>
</template>
