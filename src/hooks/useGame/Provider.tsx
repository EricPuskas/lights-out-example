import { useState, useEffect } from "react";

/**
 * External imports
 */
import lodash from "lodash";

/**
 * Imports the context
 */
import { context, ProviderProps, ProviderValues } from "./Context";

/**
 * Imports types
 */
import { Cell, Timer, GameMode, GameHistoryItem } from "../../types";

/**
 * Imports constants
 */
import { DEFAULT_GRID_SIZE } from "../../constants";

/**
 * Imports hooks
 */
import { useUtils, useGameUtils, useLocalStorage } from "..";

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
   * Initializes the hints
   */
  const [hints, setHints] = useState<number[][]>([]);

  /**
   * Initializes the isWinner state
   * This is a near impossible game to win, so this is just for fun
   */
  const [isWinner, setIsWinner] = useState(false);

  /**
   * Initializes the isResetting state
   */
  const [isResetting, setIsResetting] = useState(false);

  /**
   * Initializes the helper active state
   */
  const [helperActive, setHelperActive] = useState(false);

  /**
   * Initializes the grid size
   */
  const [gridSize, setGridSize] = useLocalStorage<number>(
    "gridSize",
    DEFAULT_GRID_SIZE
  );

  /**
   * Initializes the moves
   */
  const [moves, setMoves] = useState<number[][]>([]);

  /**
   * Initializes the timer
   */
  const [timer, setTimer] = useState<Timer>();

  /**
   * Initializes the game mode
   */
  const [gameMode, setGameMode] = useState<GameMode>("lights-out");

  /**
   * Initializes the history
   */
  const [history, setHistory] = useLocalStorage<GameHistoryItem[]>(
    "history",
    []
  );

  /**
   * Gets utils
   */
  const { formatTime } = useUtils();

  /**
   * Gets the game utils
   */
  const { createSolvableBoard, getUpdatedHints, checkForWinner } =
    useGameUtils();

  /**
   * Handles updating the game mode
   */
  const changeGameMode = (value: boolean) => {
    const gameMode = value ? "lights-on" : "lights-out";

    setMoves([]);
    setGameMode(gameMode);
    setIsWinner(false);
    setIsResetting(true);
    initializeBoard(gridSize, gameMode);
  };

  /**
   * Handles the board initialization
   */
  const initializeBoard = (gridSize: number, gameMode: GameMode) => {
    const { board, clickedCells } = createSolvableBoard(gridSize, gameMode);

    setBoard(board);
    setHints(clickedCells);
  };

  /**
   * Handles changing the grid size
   */
  const changeGridSize = (newGridSize: number) => {
    setGridSize(newGridSize);
    initializeBoard(newGridSize, gameMode);

    setMoves([]);
    setIsWinner(false);
  };

  /**
   * Handles resetting the game
   */
  const resetGame = () => {
    setMoves([]);
    setIsWinner(false);
    setIsResetting(true);
    initializeBoard(gridSize, gameMode);
  };

  /**
   * Toggles the state of a cell at the given positionX and positionY in the board.
   */
  const toggleCell = (
    board: Cell[][],
    positionX: number,
    positionY: number
  ) => {
    if (
      positionX >= 0 &&
      positionX < gridSize &&
      positionY >= 0 &&
      positionY < gridSize
    ) {
      board[positionX][positionY] = {
        ...board[positionX][positionY],
        active: !board[positionX][positionY].active
      };
    }
  };

  /**
   * Handles toggling the cell at the top, left, bottom, and right of the cell and the cell itself
   */
  const toggleCellsAround = (cell: Cell, board: Cell[][]) => {
    const { positionX, positionY } = cell;
    const newBoard = lodash.cloneDeep(board);

    toggleCell(newBoard, positionX, positionY);
    toggleCell(newBoard, positionX, positionY - 1);
    toggleCell(newBoard, positionX, positionY + 1);
    toggleCell(newBoard, positionX - 1, positionY);
    toggleCell(newBoard, positionX + 1, positionY);

    setBoard(newBoard);
    setIsWinner(checkForWinner(newBoard, gameMode));
    setMoves((prevState) => [...prevState, [positionX, positionY]]);
  };

  /**
   * Handles updating the history state
   */
  const addGameToHistory = () => {
    if (timer) {
      /**
       * Defines the history item
       */
      const historyItem = {
        id: new Date().getTime(),
        moves: moves.length,
        mode: gameMode,
        time: formatTime(timer),
        gridSize
      };

      /**
       * Builds the updated history
       */
      const updatedHistory = [...history, historyItem];

      /**
       * Updates the state
       */
      setHistory(updatedHistory);
    }
  };

  /**
   * Handles removing a history item
   */
  const removeHistoryItem = (id: number) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
  };

  /**
   * Handles clearing the history
   */
  const clearHistory = () => {
    setHistory([]);
  };

  /**
   * Initializes the board
   */
  useEffect(() => {
    if (board.length < 1) initializeBoard(gridSize, gameMode);
    // eslint-disable-next-line
  }, []);

  /**
   * Handles reseting the flag
   */
  useEffect(() => {
    if (isResetting) setIsResetting(false);
    // eslint-disable-next-line
  }, [isResetting]);

  /**
   * Handles adding the game to history
   */
  useEffect(() => {
    if (timer) addGameToHistory();
    // eslint-disable-next-line
  }, [timer]);

  /**
   * Handles updating the hints
   */
  useEffect(() => {
    if (moves.length > 0 && hints.length > 0) {
      const updatedHints = getUpdatedHints(board, gameMode, moves, hints);
      setHints(updatedHints);
    }
    // eslint-disable-next-line
  }, [moves, hints]);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    board,
    moves,
    timer,
    hints,
    history,
    isWinner,
    gridSize,
    gameMode,
    isResetting,
    helperActive,
    setTimer,
    resetGame,
    clearHistory,
    changeGameMode,
    changeGridSize,
    setHelperActive,
    removeHistoryItem,
    toggleCellsAround
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
