<script setup>
import MineHeader from './components/MineHeader.vue';
import MineTiles from './components/MineTiles.vue';
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
    MineTiles
  },
  data: () => ({
    gameState:[]
  })
}

</script>




<template>
  <div id="game">
   <MineHeader :gameState="gameState"/>
   <MineTiles :gameState="gameState" />
  </div>
</template>

<style scoped>
#game {
  border: 1px black solid;
  background-color: lightgray;
}

</style>
