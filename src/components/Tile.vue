<script>
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
  emits: ['tile-clicked']
};
</script>

<template>
  <button @click="$emit('tile-clicked', {x,y})">&nbsp;{{ isBomb ? 'B!' : '' }}</button>
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
