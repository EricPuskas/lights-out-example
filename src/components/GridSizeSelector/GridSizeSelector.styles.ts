/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports types
 */
import { GridSizeProps } from "./GridSizeSelector.types";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    gap: 35
  };
});

/**
 * Styles the GridSize
 */
export const GridSize = styled("h3", {
  shouldForwardProp: (propName) => propName !== "active"
})<GridSizeProps>((props) => {
  const { active } = props;

  return {
    fontSize: 30,
    margin: 10,
    marginBottom: 0,
    cursor: "pointer",
    "&:hover": {
      color: "#a7ffeb"
    },
    ...(active && {
      color: "#fed128"
    })
  };
});
