export enum GameStatus {
  Initial,
  InProgress,
  GameOver,
}
export enum TileStatus {
  Initial,
  Exposed,
}
export interface TileType {
  x: number;
  y: number;
  state: TileStatus;
  isBomb: boolean;
}
