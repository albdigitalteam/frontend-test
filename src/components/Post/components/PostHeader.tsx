import { useStore } from '../../../stores/hooks/useStore';
import CircularAvatar from './CircularAvatar';
import { observer } from 'mobx-react-lite';

function PostHeader({ userId }: { userId: number }) {
    const store = useStore();
    const user = store?.users.find(({ id }) => id === userId);
    return (
        <div className="flex">
            <CircularAvatar />
            {!!user && (
                <div className="flex flex-col ml-1">
                    <h1>{user.name}</h1>
                    <span>{`@${user.username}, ${user.email}`}</span>
                </div>
            )}
        </div>
    );
}

export default observer(PostHeader);
