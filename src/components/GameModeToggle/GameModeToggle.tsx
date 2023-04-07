/**
 * Imports styled components
 */
import { Container, Switch, Slider, Input } from "./GameModeToggle.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameModeToggle: React.FC = () => {
  /**
   * Gets the game state
   */
  const { gameMode, isWinner, changeGameMode } = useGame();

  if (isWinner) return null;

  /**
   * Handles the change event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeGameMode(event.target.checked);
  };

  return (
    <Container className="GameModeToggle-root">
      <Switch>
        <Input
          type="checkbox"
          onChange={handleChange}
          checked={gameMode === "lights-on"}
        />
        <Slider className="slider round"></Slider>
      </Switch>
    </Container>
  );
};
