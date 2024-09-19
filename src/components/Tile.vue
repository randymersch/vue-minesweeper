<script>
import { reactive, computed } from 'vue'

export default {
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    isBomb: {
      type:Boolean,
      default: false
    }
  },
  
  data: () => ({}),
  emits: ['tile-clicked'],
  // computed : {
  //   function showText() {
  //     return '';
  //   }
  // }
};

// a computed ref
const displayedText = computed(() => {
  console.log('displayedText');
  console.log(props.isBomb ? 'B!' : ' ');

  return props.isBomb ? 'B!' : ' '
})
</script>

<template>
  <button @click="$emit('tile-clicked', {x,y})">{{ displayedText }}</button>
</template>

<style scoped>
button {
  width: 50px;
  height: 50px;
}
</style>

<style scoped>
button {
  border: 2px outset gray;
  border-radius: 0px;
  background-color: lightgray;
}
button:hover {
  background-color: gray;
}
</style>
