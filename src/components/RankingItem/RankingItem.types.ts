/**
 * Imports types
 */
import { GameMode } from "../../types";

/**
 * Defines the component props interface
 */
export interface RankingItemProps {
  id: string | number;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
