import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Spinner({ size = 'lg' }: { size?: FontAwesomeIconProps['size'] }) {
    return (
        <FontAwesomeIcon
            className="animate-spin text-secondary"
            icon={faSpinner}
            size={size}
        />
    );
}

export default Spinner;
