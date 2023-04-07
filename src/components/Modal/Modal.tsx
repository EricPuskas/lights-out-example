/**
 * Imports font awesome
 */
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports styled components
 */
import {
  Title,
  ModalHeader,
  CloseButton,
  ModalContent,
  ModalContainer
} from "./Modal.styles";

/**
 * Imports types
 */
import { ModalProps } from "./Modal.types";

/**
 * Displays the component
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const { title, width, open, onClose, children } = props;

  if (!open) return null;

  /**
   * Prevents propagation of the event to the parent
   */
  const preventPropagation = (event: React.MouseEvent<any, MouseEvent>) => {
    event.stopPropagation();
  };

  /**
   * Handles closing the modal
   */
  const handleClose = (event: React.MouseEvent<any, MouseEvent>) => {
    preventPropagation(event);
    onClose();
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ModalContent width={width} onClick={preventPropagation}>
        <ModalHeader>
          <Title> {title}</Title>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};
