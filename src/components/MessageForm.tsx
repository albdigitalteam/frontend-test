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
                <label className="flex flex-col  w-100">
                    Title:
                    <input
                        type="text"
                        className="bg-primary"
                        {...register(titleName, { required: true })}
                    />
                </label>
            )}
            <label className="flex flex-col w-100">
                Comment:
                <textarea
                    className="bg-primary"
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
