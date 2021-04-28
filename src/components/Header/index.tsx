import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './styles.css';

function Header() {
  const history = useHistory();

  const newPost = () => {
    history.push('/new-post');
  }

  return (
    <div className='page-header'>
      <header data-testid='header' className='header'>
        <div className='title-container'>
          <span >
            Air Liquide Blog
            </span>
          <Button
            onClick={newPost}
            variant="outlined"
            color="primary"
          >
            Adicionar Post
          </Button>
        </div>
      </header>
    </div>
  )
};

export default Header;



