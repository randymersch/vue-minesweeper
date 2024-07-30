<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="game">
    <div id="header-component">
      <div><label id="score">95</label></div>
      <div><button>GO</button></div>
      <div><label id="timer">66</label></div>
      

    </div>
    <div id="game-component">
      Game Grid
      <div id="GameGridComponent">
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>

      </div>
    </div>

  </div>
</template>

<style scoped>
#game {
  border: 1px black solid;
  background-color: lightgray;
}
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


#game-component {
  flex: auto;
  button {
    border: 2px outset gray;
    border-radius: 0px;
    background-color: lightgray;
  }
  button:hover {
    background-color:gray;
  }
}
</style>
