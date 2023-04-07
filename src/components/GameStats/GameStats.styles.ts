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
    padding: 20,
    border: "1px solid #a7ffeb",
    marginTop: 50,
    borderRadius: 20
  };
});

/**
 * Styles the data row
 */
export const DataRow = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    fontSize: 35,
    minWidth: 300
  };
});

/**
 * Styles the label
 */
export const Label = styled("span")(() => {
  return {
    fontWeight: "bold",
    color: "#a7ffeb"
  };
});

/**
 * Styles the value
 */
export const Value = styled("span")(() => {
  return {
    fontWeight: "bold",
    color: "#fff"
  };
});
