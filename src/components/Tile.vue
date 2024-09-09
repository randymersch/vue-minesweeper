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
  },
  data: () => ({}),
};
</script>

<template>
  <button>&nbsp;{{ x }}, {{ y }}</button>
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
