/**
 * Imports styled components
 */
import {
  Container,
  Header,
  Date,
  GameMode,
  Score,
  ScoreItem,
  GridSize
} from "./RankingItem.styles";

/**
 * Imports types
 */
import { RankingItemProps } from "./RankingItem.types";

/**
 * Imports hooks
 */
import { useUtils } from "../../hooks";

/**
 * Displays the component
 */
export const RankingItem: React.FC<RankingItemProps> = (props) => {
  const { id, moves, time } = props;

  /**
   * Gets the utils
   */
  const { formatTimestamp } = useUtils();

  return (
    <Container>
      <Header>
        <Date> {formatTimestamp(id as number)}</Date>
      </Header>
      <Score>
        <ScoreItem> Moves: {moves}</ScoreItem>
        <ScoreItem> Time: {time}</ScoreItem>
      </Score>
    </Container>
  );
};
