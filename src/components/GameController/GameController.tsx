/**
 * Imports components
 */
import { Title } from "../Title";
import { Board } from "../Board";
import { GameTimer } from "../GameTimer";
import { GameReset } from "../GameReset";
import { GameMessage } from "../GameMessage";
import { GameHistory } from "../GameHistory";
import { GameRanking } from "../GameRanking";
import { GameHelper } from "../GameHelper";
import { GameMovesCounter } from "../GameMovesCounter";
import { GridSizeSelector } from "../GridSizeSelector";

/**
 * Imports styled components
 */
import { Container, GameOptions } from "./GameController.styles";

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
  const { isWinner, board } = useGame();

  return (
    <Container>
      <Title />
      <GameReset />
      <GridSizeSelector />
      <GameMessage />
      <Board board={board} isWinner={isWinner} />
      <GameMovesCounter />
      <GameTimer />
      <GameOptions>
        <GameHistory />
        <GameRanking />
        <GameHelper />
      </GameOptions>
    </Container>
  );
};
