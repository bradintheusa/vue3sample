<script setup lang="ts">


import TheWelcome from '@/components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'


  
    const counter = useCounterStore()

    // counter.count++
    // with autocompletion ✨
    // counter.$patch({ count: counter.count + 1 })
    // or using an action instead

    counter.initialuizeState()
    counter.increment()
    counter.increment()
    counter.increment()
  



</script>

<template>
  <main>

    <h5>  Hello {{counter.counter}} Brad</h5>
    <p>{{counter}}</p>
    <p>from fb: {{counter.fromfb}}</p>

    <TheWelcome />
  </main>
</template>
