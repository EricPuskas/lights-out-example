/**
 * Imports components
 */
import { BoardRow } from "../BoardRow";

/**
 * Imports styled components
 */
import { Container } from "./Board.styles";

/**
 * Imports types
 */
import { BoardProps } from "./Board.types";

/**
 * Displays the component
 */
export const Board: React.FC<BoardProps> = (props) => {
  const { board, isWinner } = props;

  /**
   * Handles rendering the board rows
   */
  const renderBoardRows = () => {
    return board.map((row, index) => <BoardRow key={index} row={row} />);
  };

  if (isWinner) return null;

  return <Container>{renderBoardRows()}</Container>;
};
