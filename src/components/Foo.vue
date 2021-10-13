<script setup>
import { useStore } from '../composables/store'

const {decrement} = useStore()



</script>

<template>
  <button @click="decrement">decrement</button>
</template>
