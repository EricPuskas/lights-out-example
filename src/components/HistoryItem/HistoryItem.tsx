/**
 * Imports font awesome icons
 */
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import {
  Date,
  Score,
  Header,
  GridSize,
  GameMode,
  Container,
  ScoreItem,
  DeleteContainer
} from "./HistoryItem.styles";

/**
 * Imports types
 */
import { HistoryItemProps } from "./HistoryItem.types";

/**
 * Imports hooks
 */
import { useGame, useUtils } from "../../hooks";

/**
 * Displays the component
 */
export const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  const { id, mode, moves, gridSize, time } = props;

  /**
   * Gets the game state
   */
  const { removeHistoryItem } = useGame();

  /**
   * Gets the utils
   */
  const { formatTimestamp, formatGridSize } = useUtils();

  /**
   * Defines the delete handler
   */
  const handleDelete = () => {
    removeHistoryItem(id as number);
  };

  return (
    <Container>
      <Header>
        <Date> {formatTimestamp(id as number)}</Date>
        <GridSize>{formatGridSize(gridSize)}</GridSize>
        <GameMode> Mode: {mode}</GameMode>
      </Header>
      <Score>
        <ScoreItem> Moves: {moves}</ScoreItem>
        <ScoreItem> Time: {time}</ScoreItem>
      </Score>
      <DeleteContainer onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </DeleteContainer>
    </Container>
  );
};
