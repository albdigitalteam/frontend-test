import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../images/air-liquide.svg';
import IconButton from './common/Buttons/IconButton';

function Header() {
    return (
        <div className="fixed top-0 w-full z-10 shadow-lg bg-white px-4 py-2">
            <div className="flex justify-between text-2xl">
                <Logo />
                <IconButton
                    icon={faPenToSquare}
                    buttonAction={() => {
                        console.log('click');
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
