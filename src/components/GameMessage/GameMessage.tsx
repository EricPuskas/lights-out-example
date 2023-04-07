/**
 * Imports components
 */
import { GameStats } from "../GameStats";

/**
 * Imports styled components
 */
import { NeonText } from "../styled";
import { Message, Button, Container } from "./GameMessage.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameMessage: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isWinner, resetGame } = useGame();

  if (!isWinner) return null;

  return (
    <Container>
      <Message>
        <NeonText className="NeonText-Winner" color="blue">
          Congrats!
          <NeonText className="NeonText-Winner orange" color="green">
            You won!
          </NeonText>
        </NeonText>
      </Message>
      <GameStats />
      <Button onClick={resetGame}>Play again</Button>
    </Container>
  );
};
