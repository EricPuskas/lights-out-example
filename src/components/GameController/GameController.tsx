/**
 * Imports components
 */
import { Title } from "../Title";
import { Board } from "../Board";

/**
 * Imports styled components
 */
import { Container } from "./GameController.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  /**
   * Gets the game state
   */
  const { board } = useGame();

  return (
    <Container>
      <Title />
      <Board board={board} />
    </Container>
  );
};
