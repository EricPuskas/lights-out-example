import { useState } from "react";

/**
 * Provides a hook that manages simple modal states
 */
export const useModal = () => {
  /**
   * Initializes the open state
   */
  const [open, setOpen] = useState(false);

  /**
   * Handles opening the filters modal
   */
  const openModal = () => setOpen(true);

  /**
   * Handles closing the filters modal
   */
  const closeModal = () => setOpen(false);

  /**
   * Handles toggling the modal state
   */
  const toggleModal = () => setOpen((prevState) => !prevState);

  return {
    open,
    openModal,
    closeModal,
    toggleModal
  };
};
