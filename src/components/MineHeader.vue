<script>
export default {
  props: {
    gameState: {
      type: Array,
      required: true
    }

  },
    data: () => ({

    })  


}
</script>


<template>
     <div id="header-component">
      <div><label id="score">95</label></div>
      <div><button>GO</button></div>
      <div><label id="timer">66</label></div>
    </div>
</template>


<style scoped>
#header-component {
  border-bottom: 1px black solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  button {
    background-color: yellow;
  }
}
</style>