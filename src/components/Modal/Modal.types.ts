/**
 * Defines the component props interface
 */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  width?: number;
  children: React.ReactNode;
}

/**
 * Defines the content container props interface
 */
export interface ContentContainerProps {
  width?: number;
}
