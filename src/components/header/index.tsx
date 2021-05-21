
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import './styles.css';

interface HeaderProps {
  left?: boolean,
  children?: any
}

function Header(props: HeaderProps) {
  const { left, children } = props;
  const history = useHistory();  

  const goHome = () => {
    history.push('/');
  }

  return (
    <div className='page-header'>      
      <header data-testid='header' className='header'>
        <div className='header-actions-start'>
          {left &&
            <span >
              <IconButton aria-label='delete'
                onClick={goHome}
              >
                <ArrowBackIcon
                  className='icons' />
              </IconButton>
            </span>
          }
        </div>
        <div className='title-container'>
          <span >
            Air Liquide Blog
            </span>
          {children}
        </div>
      </header>
    </div>
  )
};

export default Header;



