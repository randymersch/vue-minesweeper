<script>
import Tile from "./Tile.vue";

export default {
  props: {
    gameState: {
      type: Array,
      required: true,
    },
  },
  components: {
    Tile,
  },
  data: () => ({}),
};
</script>

<template>
  <div id="game-component">
    Game Grid
    <div id="GameGridComponent" v-for="(xItem, x) in gameState">
      <div v-for="(yItem, y) in xItem">
        {{ console.log("Point: " + yItem.x + " " + yItem.y) }}
        <Tile v-bind:x="yItem.x" v-bind:y="yItem.y" />
      </div>

      <!-- <Tile v-bind:x="0" v-bind:y="0" />
      <Tile v-bind:x="0" v-bind:y="0" />
      <Tile v-bind:x="0" v-bind:y="0" />
      <Tile v-bind:x="0" v-bind:y="0" /> -->
      <!-- <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
<br/>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button>
        <button>&nbsp;</button> -->
    </div>
  </div>
</template>

<style scoped>
#game-component {
  flex: auto;
  /* button {
    border: 2px outset gray;
    border-radius: 0px;
    background-color: lightgray;
  }
  button:hover {
    background-color:gray;
  } */
}
</style>
