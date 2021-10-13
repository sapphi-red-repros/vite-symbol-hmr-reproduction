<script setup>
import { useStore } from '../composables/store'

defineProps({
  msg: String
})

const {state, increment} = useStore()
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="increment">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
