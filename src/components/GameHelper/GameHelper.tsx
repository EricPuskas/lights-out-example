/**
 * Imports font awesome
 */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import { Container } from "./GameHelper.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameHelper: React.FC = () => {
  /**
   * Gets the game state
   */
  const { helperActive, setHelperActive } = useGame();

  /**
   * Handles the click event
   */
  const handleClick = () => {
    setHelperActive((prevState) => !prevState);
  };

  return (
    <Container active={helperActive} onClick={handleClick}>
      <FontAwesomeIcon className="Star" icon={faStar} />
    </Container>
  );
};
