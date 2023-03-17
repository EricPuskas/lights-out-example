/**
 * Imports styled components
 */
import { Container } from "./BoardCell.styles";

/**
 * Imports types
 */
import { BoardCellProps } from "./BoardCell.types";

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;

  return <Container>{cell.active ? "X" : "O"}</Container>;
};
