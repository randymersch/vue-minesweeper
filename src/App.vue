<script setup>
import MineHeader from "./components/MineHeader.vue";
import MineTiles from "./components/MineTiles.vue";
import { onMounted } from "vue";
import { TileStatus } from "./types/gameTypes";

onMounted(() => {
  console.log(`the component is now mounted.`);
});
</script>

<script>
// enum gameStatus = Initial, Started, Ended
//tile {
// enum tileStatus = initial, visible
// coordinates
// boolean isBomb || enum tileType = [bomb, neutral, [?]] try calculating all
//  y > 0    [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
//           [[x - 1,   y  ],     C     , [x + 1,   y  ]]
//  y < h    [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1]]
//}

export default {
  components: {
    MineHeader,
    MineTiles,
  },
  data: () => ({
    gameState: [
      [
        { x: 0, y: 0, isBomb: false, state: TileStatus.Initial },
        { x: 1, y: 0, isBomb: false, state: TileStatus.Initial },
        { x: 2, y: 0, isBomb: false, state: TileStatus.Initial },
      ],
      [
        { x: 0, y: 1, isBomb: false, state: TileStatus.Initial },
        { x: 1, y: 1, isBomb: false, state: TileStatus.Initial },
        { x: 2, y: 1, isBomb: false, state: TileStatus.Initial },
      ],
      [
        { x: 0, y: 2, isBomb: false, state: TileStatus.Initial },
        { x: 1, y: 2, isBomb: false, state: TileStatus.Initial },
        { x: 2, y: 2, isBomb: false, state: TileStatus.Initial },
      ],
    ],
  }),
  methods: {
    tileClick(props) {
      console.log('caught ya!');
      console.log(props);

      console.log('before');
      console.log(this.gameState[props.x, props.y].isBomb);
      this.gameState[props.x, props.y].isBomb = true;
      console.log('after');
      console.log(this.gameState[props.x, props.y].isBomb);

    }
  }
};
</script>

<template>
  <div id="game">
    <MineHeader :gameState />
    <MineTiles :gameState @tile-clicked="tileClick" />
  </div>
</template>

<style scoped>
#game {
  border: 1px black solid;
  background-color: lightgray;
  /* min-width: 25vw; */
  min-height: 25vh;
}
</style>
