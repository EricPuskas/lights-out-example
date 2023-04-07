/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Defines the component props interface
 */
export interface BoardCellProps {
  cell: Cell;
}

/**
 * Defines the container props interface
 */
export interface ContainerProps {
  active: boolean;
  gridSize: number;
  isHint: boolean;
}
