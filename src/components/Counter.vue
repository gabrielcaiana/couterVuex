<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrement">decrement</button>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      'counter'
    ]),
  },
  methods: {
    ...mapActions([
      'decrement',
      'increment'
    ])
  },
};
</script>
