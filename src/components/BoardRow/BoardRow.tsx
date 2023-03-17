/**
 * Imports components
 */
import { BoardCell } from "../BoardCell";

/**
 * Imports styled components
 */
import { Container } from "./BoardRow.styles";

/**
 * Imports types
 */
import { BoardRowProps } from "./BoardRow.types";

/**
 * Displays the component
 */
export const BoardRow: React.FC<BoardRowProps> = (props) => {
  const { row } = props;

  /**
   * Handles rendering the board cells
   */
  const renderBoardCells = () => {
    return row.map((cell, index) => <BoardCell key={index} cell={cell} />);
  };

  return <Container> {renderBoardCells()}</Container>;
};
