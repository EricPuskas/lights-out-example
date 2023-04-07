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
    backgroundColor: "#fed128",
    cursor: "pointer",
    "& svg": {
      cursor: "pointer",
      fontSize: 30,
      color: "#fff"
    },
    "& .Crown": {
      color: "#000"
    },
    "&:hover": {
      backgroundColor: "#a7ffeb"
    }
  };
});

/**
 * Styles the Ranking Container
 */
export const RankingContainer = styled("div")(() => {
  return {
    maxHeight: 600,
    overflowY: "auto",
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column"
  };
});

/**
 * Styles the Category Container
 */
export const CategoryContainer = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flex: 1
  };
});

/**
 * Styles the Flex Container
 */
export const FlexContainer = styled("div")(() => {
  return {
    display: "flex",
    flex: 1,
    width: "100%"
  };
});

/**
 * Styles the GridSize Text
 */
export const GridSizeText = styled("h2")(() => {
  return {
    display: "flex",
    flex: 1,
    justifyContent: "center"
  };
});

/**
 * Styles the GameMode Text
 */
export const GameModeText = styled("div")(() => {
  return {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    margin: 5,
    backgroundColor: "#263238"
  };
});

/**
 * Styles the No Ranking Block
 */
export const NoRankingBlock = styled("div")(() => {
  return {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#16191b",
    border: "1px solid #263238",
    color: "#fff",
    width: "auto",
    minWidth: 250,
    minHeight: 165
  };
});
