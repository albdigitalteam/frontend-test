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
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-md">
            <button
                className="inline-flex w-full justify-center rounded-md bg-secondary ring-1 ring-inset 
                ring-secondary hover:bg-white hover:text-secondary px-3 py-2 text-sm mb-2
                font-semibold text-white shadow-sm sm:ml-3 sm:w-auto sm:mb-0
                disabled:bg-gray-500 disabled:text-white"
                {...buttonConfirmProps}
            >
                Confirm
            </button>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm 
                font-semibold text-gray-900 shadow-sm ring-1 ring-inset 
                ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:bg-gray-500 disabled:text-white"
                {...buttonCancelProps}
            >
                Cancel
            </button>
        </div>
    );
}

export default ActionButtons;
