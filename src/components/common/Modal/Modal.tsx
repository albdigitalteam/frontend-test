import { Fragment, ReactNode, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Spinner from '../Spinner';
import ActionButtons from '../Buttons/ActionButtons';

/**
 * Base of the modal copied from tailwindui
 * you can see the examples here: https://tailwindui.com/components/application-ui/overlays/modals
 */

type ModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    content: ReactNode | string;
    title?: string;
    buttonForm?: string;
    confirmAction?: () => void;
    isLoading?: boolean;
};

function Modal({
    open,
    setOpen,
    content,
    title,
    buttonForm,
    confirmAction,
    isLoading,
}: ModalProps) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="flex flex-col px-4 py-3">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-base font-semibold leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {isLoading ? (
                                            <Spinner size="2xl" />
                                        ) : (
                                            content
                                        )}
                                    </div>
                                </div>
                                <ActionButtons
                                    buttonConfirmProps={{
                                        form: buttonForm,
                                        onClick: confirmAction,
                                        disabled: isLoading,
                                    }}
                                    buttonCancelProps={{
                                        type: 'button',
                                        onClick: () => setOpen(false),
                                        disabled: isLoading,
                                        ref: cancelButtonRef,
                                    }}
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Modal;
