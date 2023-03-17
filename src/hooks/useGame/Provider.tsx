import { useState, useEffect } from "react";

/**
 * Imports the context
 */
import { context, ProviderProps, ProviderValues } from "./Context";

/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Imports constants
 */
import { ROWS, COLUMNS, START_NUMBER } from "../../constants";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Initializes the board
   */
  const [board, setBoard] = useState<Cell[][]>([]);

  /**
   * Handles the board initialization
   */
  const initializeBoard = () => {
    const boards: Cell[][] = [];

    for (let i = 0; i < ROWS; i++) {
      let row: Cell[] = [];

      for (let j = 0; j < COLUMNS; j++) {
        row.push({
          active: Math.random() < START_NUMBER,
          positionX: i,
          positionY: j
        });
      }

      boards.push(row);
    }

    setBoard(boards);
  };

  /**
   * Initializes the board
   */
  useEffect(() => {
    initializeBoard();
    // eslint-disable-next-line
  }, []);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    board
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
