/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports types
 */
import { ContainerProps } from "./BoardCell.types";

/**
 * Styles the Container
 */
export const Container = styled("div", {
  shouldForwardProp: (propName) =>
    propName !== "active" && propName !== "gridSize" && propName !== "isHint"
})<ContainerProps>((props) => {
  const { active, gridSize, isHint } = props;

  /**
   * Gets the size
   */
  const getSize = () => {
    if (gridSize > 5) return 75;

    return 100;
  };

  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: 1,
    width: getSize(),
    height: getSize(),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#263238",
    transition: "background-color 0.2s ease-in-out, color 0.1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#419444"
    },
    ...(active && {
      backgroundColor: "#4caf50"
    }),
    ...(isHint && {
      backgroundColor: "#9faf4c",
      "&:hover": {
        backgroundColor: "#82903c"
      }
    })
  };
});

/**
 * Styles the Icon container
 */
export const IconContainer = styled("div")(() => {
  return {
    fontSize: 18
  };
});
