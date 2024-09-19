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
    <div id="GameGridRow" v-for="(xItem, x) in gameState">
      <span v-for="(yItem, y) in xItem">
        <Tile  v-bind:isBomb="yItem.isBomb"  v-bind:x="yItem.x" v-bind:y="yItem.y" :key="x + ',' + y"  @tile-clicked="$emit('tile-clicked',$event)" />
      </span>
    </div>
  </div>
</template>

<style scoped>
#game-component {
  display: flex;
  flex-direction: column;
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

#GameGridRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
