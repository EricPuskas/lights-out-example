/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    border: "1px solid #263238",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    cursor: "pointer",
    "& svg": {
      cursor: "pointer",
      fontSize: 30,
      color: "#000"
    },
    "&:hover": {
      backgroundColor: "#a7ffeb"
    }
  };
});

/**
 * Styles the History Container
 */
export const HistoryContainer = styled("div")(() => {
  return {
    maxHeight: 600,
    overflowY: "auto",
    marginTop: 10,
    width: "100%"
  };
});

/**
 * Styles the Clear History Button
 */
export const ClearHistoryButton = styled("button")(() => {
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
