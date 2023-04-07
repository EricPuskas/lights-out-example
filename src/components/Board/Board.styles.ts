/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5
  };
});
