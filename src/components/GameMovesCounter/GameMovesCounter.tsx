/**
 * Imports styled components
 */
import { Container } from "./GameMovesCounter.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameMovesCounter: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isWinner, moves } = useGame();

  if (isWinner) return null;

  return <Container>Moves: {moves.length}</Container>;
};
