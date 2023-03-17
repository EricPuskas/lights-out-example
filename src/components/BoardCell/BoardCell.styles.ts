/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  };
});
