/**
 * Imports components
 */
import { Modal } from "../Modal";
import { RankingItem } from "../RankingItem";

/**
 * Imports font awesome
 */
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import {
  Container,
  GridSizeText,
  GameModeText,
  FlexContainer,
  NoRankingBlock,
  RankingContainer,
  CategoryContainer
} from "./GameRanking.styles";

/**
 * Imports hooks
 */
import { useModal, useGame } from "../../hooks";

/**
 * Imports types
 */
import { GameMode } from "../../types";

/**
 * Displays the component
 */
export const GameRanking: React.FC = () => {
  /**
   * Gets the game state
   */
  const { history } = useGame();

  /**
   * Gets the modal state
   */
  const { open, openModal, closeModal } = useModal();

  /**
   * Gets the top score
   */
  const getTopScore = (gridSize: number, gameMode: GameMode) => {
    const filteredHistory = history.filter(
      (item) => item.gridSize === gridSize && item.mode === gameMode
    );

    if (!filteredHistory.length) return <NoRankingBlock />;

    const topScore = filteredHistory.reduce((acc, item) => {
      const isBetterMoves = item.moves < acc.moves;
      const isSameMoves = item.moves === acc.moves;
      const isBetterTime = item.time < acc.time;

      if (isBetterMoves || (isSameMoves && isBetterTime)) {
        return item;
      }

      return acc;
    });

    return <RankingItem key={topScore.id} {...topScore} />;
  };

  if (!history.length) return null;

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon className="Crown" icon={faCrown} />
      <Modal width={900} title="Top scores" open={open} onClose={closeModal}>
        <RankingContainer>
          <FlexContainer>
            <GridSizeText> 3x3 </GridSizeText>
            <GridSizeText> 5x5 </GridSizeText>
            <GridSizeText> 9x9 </GridSizeText>
          </FlexContainer>
          <GameModeText> Lights Out </GameModeText>
          <FlexContainer>
            <CategoryContainer>
              {getTopScore(3, "lights-out")}
            </CategoryContainer>
            <CategoryContainer>
              {getTopScore(5, "lights-out")}
            </CategoryContainer>
            <CategoryContainer>
              {getTopScore(9, "lights-out")}
            </CategoryContainer>
          </FlexContainer>
          <GameModeText> Lights On </GameModeText>
          <FlexContainer>
            <CategoryContainer>{getTopScore(3, "lights-on")}</CategoryContainer>
            <CategoryContainer>{getTopScore(5, "lights-on")}</CategoryContainer>
            <CategoryContainer>{getTopScore(9, "lights-on")}</CategoryContainer>
          </FlexContainer>
        </RankingContainer>
      </Modal>
    </Container>
  );
};
