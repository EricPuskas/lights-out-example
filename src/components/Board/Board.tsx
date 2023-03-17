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
  const { board } = props;

  /**
   * Handles rendering the board rows
   */
  const renderBoardRows = () => {
    return board.map((row, index) => <BoardRow key={index} row={row} />);
  };

  return <Container>{renderBoardRows()}</Container>;
};
