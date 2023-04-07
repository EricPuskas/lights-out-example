/**
 * Imports font awesome
 */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import { Container, IconContainer } from "./BoardCell.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Imports types
 */
import { BoardCellProps } from "./BoardCell.types";

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;
  const { active, positionX, positionY } = cell;

  /**
   * Gets the game state
   */
  const { helperActive, hints, moves, gridSize, board, toggleCellsAround } =
    useGame();

  /**
   * Handles the click event
   */
  const handleClick = () => {
    toggleCellsAround(cell, board);
  };

  const getHintStatus = () => {
    if (!helperActive) return false;
    if (moves.length >= hints.length) return false;
    const [x, y] = hints[moves.length];

    return x === positionX && y === positionY;
  };

  return (
    <Container
      isHint={getHintStatus()}
      gridSize={gridSize}
      onClick={handleClick}
      active={active}
    >
      {getHintStatus() && (
        <IconContainer>
          <FontAwesomeIcon icon={faStar} />
        </IconContainer>
      )}
    </Container>
  );
};
