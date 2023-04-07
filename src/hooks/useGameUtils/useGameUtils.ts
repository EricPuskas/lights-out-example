/**
 * External imports
 */
import lodash from "lodash";

/**
 * Imports types
 */
import { Cell, GameMode } from "../../types";
import { Patterns } from "./useGameUtils.types";

/**
 * Imports constants
 */
import {
  LIT_CHANCE,
  PATTERN_3X3,
  PATTERN_5X5,
  PATTERN_9X9
} from "../../constants";

/**
 * Provides utility functions for the game provider
 */
export const useGameUtils = () => {
  /**
   * Creates a new game board with the given gridSize (number of rows and columns).
   * It initializes each cell with a random state (25% chance of being lit).
   */
  const createBoard = (gridSize: number) => {
    const board: number[][] = [];

    for (let i = 0; i < gridSize; i++) {
      const row: number[] = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(Math.random() < LIT_CHANCE ? 1 : 0);
      }
      board.push(row);
    }
    return board;
  };

  /**
   * Toggles the state of a cell at the given positionX and positionY in the board.
   */
  const toggleCell = (
    board: number[][],
    positionX: number,
    positionY: number
  ) => {
    const size = board.length;

    if (
      positionX >= 0 &&
      positionX < size &&
      positionY >= 0 &&
      positionY < size
    ) {
      board[positionX][positionY] = 1 - board[positionX][positionY];
    }
  };

  /**
   * Creates a deep copy of the given board, so that changes to the copy do not affect the original board.
   */
  const deepCloneBoard = (board: number[][]) => {
    return board.map((row) => row.slice());
  };

  /**
   * Toggles the state of a cell and its adjacent neighbors at the given positionX and positionY in the board. If clickedCells is provided, it will also store the clicked position in that array.
   */
  const toggleCellAndNeighbours = (
    board: number[][],
    positionX: number,
    positionY: number,
    clickedCells?: number[][]
  ) => {
    toggleCell(board, positionX, positionY);
    toggleCell(board, positionX - 1, positionY);
    toggleCell(board, positionX + 1, positionY);
    toggleCell(board, positionX, positionY - 1);
    toggleCell(board, positionX, positionY + 1);

    if (clickedCells) {
      clickedCells.push([positionX, positionY]);
    }
  };

  /**
   * Converts the board to a simpler format, where each cell is represented as an object with positionX, positionY, and active (lit/unlit) properties.
   */
  const formatBoard = (board: number[][]) => {
    return board.map((row, i) => {
      return row.map((cell, j) => {
        return {
          positionX: i,
          positionY: j,
          active: cell ? true : false
        } as Cell;
      });
    });
  };

  /**
   *  Helper function to convert the board to a simpler format, where each cell is represented as a number (1 for lit, 0 for unlit).
   */
  const formatBoardToNumbers = (board: Cell[][]) => {
    return board.map((row) => {
      return row.map((cell) => {
        return cell.active ? 1 : 0;
      });
    });
  };

  /**
   * Returns the pattern to use for the given board size.
   */
  const getPattern = (size: number) => {
    if (size === 3) return PATTERN_3X3;
    if (size === 9) return PATTERN_9X9;

    return PATTERN_5X5;
  };

  /**
   * Checks if the current board state matches any of the predefined patterns for the given board size.
   */
  const checkPattern = (board: number[][]) => {
    const size = board.length;
    const patterns: Patterns = getPattern(size);

    const lastRow = board[size - 1].join("");

    for (const pattern in patterns) {
      if (lastRow.includes(pattern)) {
        return patterns[pattern];
      }
    }

    return null;
  };

  /**
   * Tries to turn off the lights on the board, row by row, by clicking cells based on the state of the previous row. It stores the clicked positions in clickedCells.
   */
  const chaseLights = (board: number[][], clickedCells: number[][]) => {
    const size = board.length;

    for (let i = 1; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i - 1][j]) {
          toggleCellAndNeighbours(board, i, j, clickedCells);
        }
      }
    }
  };

  /**
   *  Similar to chaseLights, but it turns on the lights instead of turning them off.
   */
  const chaseLightsOn = (board: number[][], clickedCells: number[][]) => {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < clickedCells.length; i++) {
      const [row, col] = clickedCells[i];
      board[row][col] = 1 - board[row][col];

      if (row - 1 >= 0) board[row - 1][col] = 1 - board[row - 1][col];
      if (row + 1 < rows) board[row + 1][col] = 1 - board[row + 1][col];
      if (col - 1 >= 0) board[row][col - 1] = 1 - board[row][col - 1];
      if (col + 1 < cols) board[row][col + 1] = 1 - board[row][col + 1];
    }

    return board;
  };

  /**
   *  Solves the "Lights Out" puzzle by chasing lights and applying the appropriate pattern.
   */
  const solveLightsOutPuzzle = (
    board: number[][],
    clickedCells: number[][]
  ) => {
    chaseLights(board, clickedCells);
    const pattern = checkPattern(board);

    if (pattern) {
      const size = board.length;
      for (let i = 0; i < size; i++) {
        if (pattern[i] === "1") {
          toggleCellAndNeighbours(board, 0, i, clickedCells);
        }
      }
      chaseLights(board, clickedCells);

      return board.every((row) => row.every((cell) => cell === 0));
    } else {
      return false;
    }
  };

  /**
   * Solves the "Lights On" puzzle by turning on lights row by row and ensuring the last row is lit.
   */
  const solveLightsOnPuzzle = (board: number[][], clickedCells: number[][]) => {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows - 1; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === 0) {
          clickedCells.push([i + 1, j]);
          board = chaseLightsOn(board, [[i + 1, j]]);
        }
      }
    }

    // Check if the last row is all lit
    const isLastRowLit = board[rows - 1].every((cell) => cell === 1);

    if (!isLastRowLit) {
      return false;
    }

    return (
      clickedCells.length > 0 &&
      board.every((row) => row.every((cell) => cell === 1))
    );
  };

  /**
   * Solves the puzzle depending on the given gameMode ("lights-on" or "lights-out").
   */
  const solvePuzzle = (
    board: number[][],
    clickedCells: number[][],
    gameMode: GameMode
  ) => {
    if (gameMode === "lights-on") {
      return solveLightsOnPuzzle(board, clickedCells);
    }

    return solveLightsOutPuzzle(board, clickedCells);
  };

  /**
   * Creates a solvable "Lights Out" board with the given gridSize, returning the initial board and the clickedCells needed to solve the puzzle.
   */
  const createSolvableLightsOutBoard = (gridSize: number) => {
    let board: number[][] = [];
    let initialBoard: number[][] = [];
    let solved = false;
    let clickedCells: number[][] = [];
    let failedBoards = 0;

    while (!solved) {
      board = createBoard(gridSize);
      initialBoard = deepCloneBoard(board);
      clickedCells = [];

      if (solveLightsOutPuzzle(board, clickedCells)) {
        solved = true;
      } else {
        failedBoards++;
      }
    }

    return { board: formatBoard(initialBoard), clickedCells };
  };

  /**
   * Creates a solvable "Lights On" board with the given gridSize, returning the initial board and the clickedCells needed to solve the puzzle.
   */
  const createSolvableLightsOnBoard = (gridSize: number) => {
    let board: number[][] = [];
    let initialBoard: number[][] = [];
    let solved = false;
    let clickedCells: number[][] = [];
    let failedBoards = 0;

    while (!solved) {
      board = createBoard(gridSize);
      initialBoard = deepCloneBoard(board);
      clickedCells = [];

      if (solveLightsOnPuzzle(board, clickedCells)) {
        solved = true;
      } else {
        failedBoards++;
      }
    }

    return { board: formatBoard(initialBoard), clickedCells };
  };

  /**
   * Creates a solvable board with the given gridSize and gameMode, returning the initial board and the clickedCells needed to solve the puzzle.
   */
  const createSolvableBoard = (gridSize: number, gameMode: GameMode) => {
    if (gameMode === "lights-on") {
      return createSolvableLightsOnBoard(gridSize);
    }

    return createSolvableLightsOutBoard(gridSize);
  };

  /**
   * Handles the logic for updating the hints when the user clicks on a cell.
   */
  const getUpdatedHints = (
    board: Cell[][],
    gameMode: GameMode,
    moves: number[][],
    hints: number[][]
  ) => {
    if (moves.length > 0 && hints.length > 0) {
      const diff = hints.some((hint, index) => {
        if (moves[index] === undefined) return false;
        return moves[index].toString() !== hint.toString();
      });

      if (diff) {
        const clonedBoard = lodash.cloneDeep(board);
        const hints = lodash.cloneDeep(moves);

        solvePuzzle(formatBoardToNumbers(clonedBoard), hints, gameMode);

        return hints;
      }
    }

    return hints;
  };

  /**
   * Handles checking for a winner
   */
  const checkForWinner = (board: Cell[][], gameMode: GameMode) => {
    if (board.length < 1) return false;

    return board.every((row) =>
      row.every((cell) => {
        if (gameMode === "lights-out") {
          return !cell.active;
        } else {
          return cell.active;
        }
      })
    );
  };

  return {
    solvePuzzle,
    getUpdatedHints,
    checkForWinner,
    createSolvableBoard,
    formatBoardToNumbers
  };
};
