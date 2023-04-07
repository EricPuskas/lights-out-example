/**
 * Defines the NeonColor type
 */
export type NeonColor = "blue" | "orange" | "green";

/**
 * Defines the GameMode type
 */
export type GameMode = "lights-on" | "lights-out";

/**
 * Defines the Cell interface
 */
export interface Cell {
  active: boolean;
  positionX: number;
  positionY: number;
}

/**
 * Defines the timer interface
 */
export interface Timer {
  minutes: number;
  seconds: number;
}

/**
 * Defines the GameHistoryItem interface
 */
export interface GameHistoryItem {
  id: number | string;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
