import React from 'react';
import {Routes, Route} from 'react-router-dom';

import SignIn from '../pages/signin/index.page';
import Feed from '../pages/feed/index.page';
import Posts from '../pages/posts/index.page';


const RoutesPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/feed' element={<Feed/>} />
        <Route path='/posts/:id' element={<Posts/>} />
      </Routes>
    </>
  );
};

export default RoutesPages;
