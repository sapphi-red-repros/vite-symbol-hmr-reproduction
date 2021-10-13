import { reactive, provide, inject } from 'vue'

const injectionKey = Symbol()

const createStore = () => {
  return reactive({
    count: 0
  })
}

export const provideStore = () => {
  provide(injectionKey, createStore())
}

export const useStore = () => {
  const state = inject(injectionKey)
  const increment = () => {
    state.count++
  }
  const decrement = () => {
    state.count--
  }

  return {
    state,
    increment,
    decrement
  }
}
