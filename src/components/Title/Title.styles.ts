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
    alignItems: "center",
    gap: 10,
    "& .TitleBlue": {
      position: "relative"
    },
    "& .GameModeToggle-root": {
      position: "absolute",
      top: 45,
      right: -80
    }
  };
});
