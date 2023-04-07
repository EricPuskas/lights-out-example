/**
 * Imports styled components
 */
import { Button } from "./GameReset.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameReset: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isWinner, resetGame } = useGame();

  if (isWinner) return null;

  return <Button onClick={resetGame}>Reset</Button>;
};
