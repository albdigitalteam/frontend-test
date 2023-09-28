import { FieldValues, Path, useForm } from 'react-hook-form';

type MessageFormProps<T> = {
    formId: string;
    onSubmit: (data: T) => void;
    isNewPost?: boolean;
};

function MessageForm<T extends FieldValues>({
    isNewPost,
    formId,
    onSubmit,
}: MessageFormProps<T>) {
    const { register, handleSubmit, watch } = useForm<T>({
        mode: 'onChange',
    });

    const titleName = 'title' as Path<T>;
    const bodyName = 'body' as Path<T>;
    const imageName = 'image' as Path<T>;

    const imageFile = watch(imageName);

    return (
        <form
            id={formId}
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isNewPost && (
                <label className="flex flex-col w-100">
                    <span>Title:</span>
                    <input
                        type="text"
                        className="bg-white border border-slate-300 rounded-md text-sm 
                        shadow-sm p-1 
                        focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        {...register(titleName, { required: true })}
                    />
                </label>
            )}
            <label className="flex flex-col w-100">
                <span>Comment:</span>
                <textarea
                    className="bg-white border border-slate-300 rounded-md text-sm 
                        shadow-sm p-1 
                        focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows={4}
                    {...register(bodyName, {
                        required: true,
                    })}
                />
            </label>
            {isNewPost && (
                <div className="flex items-center justify-center w-full mt-3">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {imageFile ? (
                                <span>{imageFile[0].name}</span>
                            ) : (
                                <>
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>
                                        <span> or drag and drop</span>
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        PNG or JPG
                                    </p>
                                </>
                            )}
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            accept=".jpg,.jpeg,.png"
                            {...register(imageName)}
                        />
                    </label>
                </div>
            )}
        </form>
    );
}

export default MessageForm;
