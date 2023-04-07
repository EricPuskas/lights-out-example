import { createContext, Dispatch, SetStateAction } from "react";

/**
 * Imports types
 */
import { GameMode, GameHistoryItem, Cell, Timer } from "../../types";

/**
 * Defines the Provider Props Interface
 */
export interface ProviderProps {
  children: React.ReactNode;
}

/**
 * Defines the Provider Values Interface
 */
export interface ProviderValues {
  board: Cell[][];
  isWinner: boolean;
  gridSize: number;
  moves: number[][];
  timer?: Timer;
  gameMode: GameMode;
  isResetting: boolean;
  history: GameHistoryItem[];
  hints: number[][];
  helperActive: boolean;
  setHelperActive: Dispatch<SetStateAction<boolean>>;
  setTimer: Dispatch<SetStateAction<Timer | undefined>>;
  resetGame: () => void;
  changeGameMode: (value: boolean) => void;
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
  changeGridSize: (newGridSize: number) => void;
  removeHistoryItem: (id: number) => void;
  clearHistory: () => void;
}

/**
 * Defines the default values
 */
export const defaultValues: ProviderValues = {
  board: [],
  isWinner: false,
  gridSize: 5,
  moves: [],
  isResetting: false,
  gameMode: "lights-out",
  history: [],
  hints: [],
  helperActive: false,
  resetGame: () => {},
  setTimer: () => {},
  setHelperActive: () => {},
  changeGameMode: () => {},
  toggleCellsAround: () => {},
  changeGridSize: () => {},
  removeHistoryItem: () => {},
  clearHistory: () => {}
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
