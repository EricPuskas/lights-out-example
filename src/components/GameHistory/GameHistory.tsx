/**
 * Imports components
 */
import { Modal } from "../Modal";
import { HistoryItem } from "../HistoryItem";

/**
 * Imports font awesome
 */
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import {
  Container,
  HistoryContainer,
  ClearHistoryButton
} from "./GameHistory.styles";

/**
 * Imports hooks
 */
import { useModal, useGame, useUtils } from "../../hooks";

/**
 * Displays the component
 */
export const GameHistory: React.FC = () => {
  /**
   * Gets the game state
   */
  const { history, clearHistory } = useGame();

  /**
   * Gets the modal state
   */
  const { open, openModal, closeModal } = useModal();

  /**
   * Gets utils
   */
  const { reverseArray } = useUtils();

  /**
   * Handles rendering the history items
   */
  const renderHistoryItems = () => {
    return reverseArray(history).map((item) => (
      <HistoryItem key={item.id} {...item} />
    ));
  };

  if (!history.length) return null;

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal title="Game History" open={open} onClose={closeModal}>
        <ClearHistoryButton onClick={clearHistory}>
          Clear history
        </ClearHistoryButton>
        <HistoryContainer>{renderHistoryItems()}</HistoryContainer>
      </Modal>
    </Container>
  );
};
