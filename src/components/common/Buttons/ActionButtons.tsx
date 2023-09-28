type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: React.Ref<HTMLButtonElement>;
};

function ActionButtons({
    buttonConfirmProps,
    buttonCancelProps,
}: {
    buttonConfirmProps: ButtonType;
    buttonCancelProps: ButtonType;
}) {
    return (
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-md">
            <button
                className="inline-flex w-full justify-center rounded-md bg-secondary ring-1 ring-inset ring-secondary hover:bg-white hover:text-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                {...buttonConfirmProps}
            >
                Confirm
            </button>
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                {...buttonCancelProps}
            >
                Cancel
            </button>
        </div>
    );
}

export default ActionButtons;
