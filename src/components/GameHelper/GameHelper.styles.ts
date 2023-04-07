/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports types
 */
import { ContainerProps } from "./GameHelper.types";

/**
 * Styles the Container
 */
export const Container = styled("div", {
  shouldForwardProp: (propName) => propName !== "active"
})<ContainerProps>((props) => {
  const { active } = props;

  return {
    border: "1px solid #263238",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#263238",
    cursor: "pointer",
    "& svg": {
      cursor: "pointer",
      fontSize: 30,
      color: "#fff"
    },
    "& .Star": {
      color: "#fff"
    },
    "&:hover": {
      backgroundColor: "#263238"
    },
    ...(active && {
      backgroundColor: "#9faf4c",
      "&:hover": {
        backgroundColor: "#82903c"
      }
    })
  };
});
