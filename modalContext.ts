export type ModalProps = {
  onClose: () => void;
};

export type ModalContextType = {
  showModal: (theModalCreator: (onClose: () => void) => ReactElement<ModalProps>) => void;
};

export const ModalContext = createContext<ModalContextType>({
  showModal: (theModalCreator: (onClose: () => void) => ReactElement<ModalProps>) => {},
});

export const useModalContext = () => useContext(ModalContext);
