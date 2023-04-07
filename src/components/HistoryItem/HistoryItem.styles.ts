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
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#263238",
    border: "1px solid #263238",
    color: "#fff",
    position: "relative"
  };
});

/**
 * Styles the Header
 */
export const Header = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "relative"
  };
});

/**
 * Styles the Score
 */
export const Score = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
});

/**
 * Styles the Score Item
 */
export const ScoreItem = styled("div")(() => {
  return {
    padding: 10,
    border: "1px solid #fff",
    borderRadius: 25,
    margin: 5,
    width: 100,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "bold"
  };
});

/**
 * Styles the Date
 */
export const Date = styled("div")(() => {
  return {
    color: "#fed128",
    fontWeight: "bold"
  };
});

/**
 * Styles the GameMode
 */
export const GameMode = styled("div")(() => {
  return {
    color: "#a7ffeb",
    fontWeight: "bold"
  };
});

/**
 * Styles the GridSize
 */
export const GridSize = styled("div")(() => {
  return {
    color: "#fa1c16",
    fontWeight: "bold",
    fontSize: 25,
    bottom: -120,
    right: -5,
    position: "absolute"
  };
});

/**
 * Styles the Delete Container
 */
export const DeleteContainer = styled("div")(() => {
  return {
    bottom: 10,
    left: 10,
    position: "absolute",
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#fff",
      "& svg": {
        color: "#000"
      }
    },
    "& svg": {
      color: "#fff",
      width: 20,
      height: 20
    }
  };
});
