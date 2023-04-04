import { useModalContext } from "./modalContext";

export default function ComponentOpeningModal() {
  const { showModal } = useModalContext();

  return (
    <button
      onClick={() => showModal((onClose) => <SomeModal onClose={onClose} />)}
    >
      Open modal
    </button>
  );
}
