import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: FontAwesomeIconProps['icon'];
    buttonAction: () => void;
    text?: string | number;
}

function IconButton({ icon, buttonAction, text }: IconButtonProps) {
    return (
        <button className="hover:text-secondary w-fit" onClick={buttonAction}>
            <FontAwesomeIcon icon={icon} />
            {!!text && <span className="ml-1">{text}</span>}
        </button>
    );
}

export default IconButton;
