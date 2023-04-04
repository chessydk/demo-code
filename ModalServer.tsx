import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ClientOnly } from "remix-utils";
import type { ModalProps } from "~/context/modalContext";
import { ModalContext } from "~/context/modalContext";

export function ModalServer({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactElement<ModalProps> | null>(null);

  function onClose() {
    setModal(null);
  }

  function showModal(theModalCreator: (onClose: () => void) => ReactElement<ModalProps>) {
    setModal(theModalCreator(onClose));
  }

  return (
    <ModalContext.Provider
      value={{
        showModal,
      }}>
      <>
        {children}
        {modal && <ClientOnly>{() => createPortal(modal, document.body)}</ClientOnly>}
      </>
    </ModalContext.Provider>
  );
}
