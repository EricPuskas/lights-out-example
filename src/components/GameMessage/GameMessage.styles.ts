/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
});

/**
 * Styles the Message
 */
export const Message = styled("div")(() => {
  return {
    marginTop: 100,
    "& .NeonText-Winner": {
      fontSize: 50,
      margin: 0,
      "&.orange": {
        marginLeft: 20
      }
    }
  };
});

/**
 * Styles the Button
 */
export const Button = styled("button")(() => {
  return {
    borderRadius: 35,
    minWidth: 200,
    fontSize: 25,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    marginTop: 50,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#a7ffeb",
      color: "#000"
    }
  };
});
