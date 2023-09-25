import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

type IconButtonProps = {
    icon: FontAwesomeIconProps['icon'];
    buttonAction: () => void;
    text?: string;
};

function IconButton({ icon, buttonAction, text }: IconButtonProps) {
    return (
        <button className="hover:text-secondary" onClick={buttonAction}>
            <FontAwesomeIcon icon={icon} />
            {!!text && text}
        </button>
    );
}

export default IconButton;
