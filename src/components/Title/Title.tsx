/**
 * Imports components
 */
import { GameModeToggle } from "../GameModeToggle";

/**
 * Imports styled components
 */
import { NeonText } from "../styled";
import { Container } from "./Title.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const Title: React.FC = () => {
  /**
   * Gets the game state
   */
  const { gameMode } = useGame();

  return (
    <Container>
      <NeonText color="green">Lights</NeonText>
      <NeonText className="TitleBlue" color="blue">
        {gameMode === "lights-out" ? "Out" : "On"}
        <GameModeToggle />
      </NeonText>
    </Container>
  );
};
