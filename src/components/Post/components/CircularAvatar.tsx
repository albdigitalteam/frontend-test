import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CircularAvatar() {
    return (
        <div
            className="flex justify-center items-center rounded-full h-12 w-12
                        bg-primary border border-secondary border-solid
                        text-secondary text-2xl"
        >
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
}

export default CircularAvatar;
