/**
 * Imports styled components
 */
import { Container, DataRow, Label, Value } from "./GameStats.styles";

/**
 * Imports hooks
 */
import { useGame, useUtils } from "../../hooks";

/**
 * Displays the component
 */
export const GameStats: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isWinner, moves, timer } = useGame();

  /**
   * Gets utils
   */
  const { formatTime } = useUtils();

  if (!isWinner) return null;

  return (
    <Container>
      <DataRow>
        <Label>Moves:</Label> <Value>{moves.length}</Value>
      </DataRow>
      <DataRow>
        <Label>Time:</Label>
        <Value> {formatTime(timer || { minutes: 0, seconds: 0 })} </Value>
      </DataRow>
    </Container>
  );
};
