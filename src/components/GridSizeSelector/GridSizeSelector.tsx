/**
 * Imports styled components
 */
import { Container, GridSize } from "./GridSizeSelector.styles";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Imports types
 */
import { GridSizeItem } from "./GridSizeSelector.types";

/**
 * Displays the component
 */
export const GridSizeSelector: React.FC = () => {
  /**
   * Gets the game state
   */
  const { isWinner, gridSize, changeGridSize } = useGame();

  /**
   * Handles rendering the grid sizes
   */
  const renderGridSizes = () => {
    const items: GridSizeItem[] = [
      { size: 3, label: "3x3" },
      { size: 5, label: "5x5" },
      { size: 9, label: "9x9" }
    ];

    return items.map((item, index) => (
      <GridSize
        key={`${item.size}-${index}}`}
        active={gridSize === item.size}
        onClick={() => changeGridSize(item.size)}
      >
        {item.label}
      </GridSize>
    ));
  };

  if (isWinner) return null;

  return <Container>{renderGridSizes()}</Container>;
};
