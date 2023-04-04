import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Button from "~/components/forms/Button";

interface Props {
  title: string;
  submitButtons: () => ReactElement;
  onClose: () => void;
  withExclamation?: boolean;
  children: (closeModal: () => void) => ReactNode;
}
export default function Modal({ title, submitButtons, onClose = () => {}, withExclamation = false, children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  function close() {
    setIsOpen(false);
  }

  return (
    <Transition.Root show={isOpen} as={Fragment} appear afterLeave={onClose}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="mt-36 flex min-h-full items-start justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-md border border-zinc-100/10 bg-zinc-800 p-8 text-left text-zinc-300 transition-all">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-zinc-800 text-zinc-500 outline-0 hover:text-zinc-100 focus:outline-zinc-200"
                    onClick={close}>
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-center">
                  {withExclamation && (
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:ml-0 sm:mr-4 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
                    </div>
                  )}
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h2" className="h1">
                      {title}
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-5">{children(close)}</div>
                <div className="mt-10 sm:flex sm:flex-row-reverse sm:gap-x-3">
                  {submitButtons()}
                  <Button variant="secondary" onClick={close} className="mt-3 sm:mt-0">
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
