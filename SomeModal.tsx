import Modal from "./Modal";

type Props = {
  onClose: () => void;
};

export default function SomeModal({ onClose }: Props) {

  function SubmitButton() {
    return (
      <button type="submit" form="closePositionForm">
      </button>
    );
  }

  return (
    <Modal title="Close position" submitButtons={SubmitButton} onClose={onClose}>
      {(closeModal) => (
        <ModalContent
          closeModal={closeModal}
        />
      )}
    </Modal>
  );
}

type ModalContentProps = {
  closeModal: () => void;
};

function ModalContent({ closeModal }: ModalContentProps) {

  return (
    <p>Some modal content</p>
  );

}
