import { useEffect } from "react";

/**
 * Imports styled components
 */
import { Container } from "./GameTimer.styles";

/**
 * Imports hooks
 */
import { useGame, useUtils, useStopwatch } from "../../hooks";

/**
 * Displays the component
 */
export const GameTimer: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isResetting, gridSize, isWinner, setTimer } = useGame();

  /**
   * Gets the stopwatch state
   */
  const { minutes, seconds, reset } = useStopwatch();

  /**
   * Gets utils
   */
  const { formatTime } = useUtils();

  /**
   * Resets the timer when the game is won or the grid size changes
   */
  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [gridSize, isWinner, isResetting]);

  /**
   * Updates the timer when the game is won
   * Used for game stats
   */
  useEffect(() => {
    if (isWinner) {
      setTimer({ minutes, seconds });
    }
    // eslint-disable-next-line
  }, [isWinner]);

  if (isWinner) return null;

  return <Container>{`Time: ${formatTime({ minutes, seconds })}`}</Container>;
};
