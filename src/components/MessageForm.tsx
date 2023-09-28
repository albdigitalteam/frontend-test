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
    const { register, handleSubmit } = useForm<T>({
        mode: 'onChange',
    });

    const titleName = 'title' as Path<T>;
    const bodyName = 'body' as Path<T>;

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
        </form>
    );
}

export default MessageForm;
