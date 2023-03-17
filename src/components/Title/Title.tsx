/**
 * Imports styled components
 */
import { NeonText } from "../styled";
import { Container } from "./Title.styles";

/**
 * Displays the component
 */
export const Title: React.FC = () => {
  return (
    <Container>
      <NeonText color="blue">Lights</NeonText>
      <NeonText color="orange">Out</NeonText>
    </Container>
  );
};
