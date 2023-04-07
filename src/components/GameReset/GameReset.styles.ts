/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Button
 */
export const Button = styled("button")(() => {
  return {
    borderRadius: 5,
    padding: 10,
    minWidth: 150,
    fontSize: 20,
    marginBottom: 10,
    color: "#fff",
    background: "#d75b5b",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      background: "#d20101"
    }
  };
});
