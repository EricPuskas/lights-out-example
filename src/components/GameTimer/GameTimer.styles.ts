/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    borderRadius: 35,
    minWidth: 200,
    fontSize: 25,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    marginTop: 25,
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#a7ffeb"
    }
  };
});
