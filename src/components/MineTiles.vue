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
        <Tile
          :isBomb="yItem.isBomb"
          :x="yItem.x"
          :y="yItem.y"
          :key="x + ',' + y"
          @tile-clicked="$emit('tile-clicked', $event)"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
#game-component {
  display: flex;
  flex-direction: column;
  flex: auto;
}

#GameGridRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
