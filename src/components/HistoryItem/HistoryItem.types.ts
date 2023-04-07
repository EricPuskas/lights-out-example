/**
 * Imports types
 */
import { GameMode } from "../../types";

/**
 * Defines the component props interface
 */
export interface HistoryItemProps {
  id: string | number;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
