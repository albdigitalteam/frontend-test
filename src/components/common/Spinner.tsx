import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface SpinnerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: FontAwesomeIconProps['size'];
}

function Spinner({ size = 'lg' }: SpinnerProps) {
    return (
        <FontAwesomeIcon
            className="animate-spin text-secondary"
            icon={faSpinner}
            size={size}
        />
    );
}

export default Spinner;
