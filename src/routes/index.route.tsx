import React from 'react';
import {Routes, Route} from 'react-router-dom';

import ProtectRoute from './protect.route';
import PublicRoute from './public.route';


import SignIn from '../pages/signin/index.page';
import Feed from '../pages/feed/index.page';
import Posts from '../pages/posts/index.page';

const RoutesPages: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path='/' element={<SignIn />} />
        </Route>

        <Route element={<ProtectRoute />}>
          <Route path='/feed' element={<Feed />} />
          <Route path='/posts/:id' element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesPages;
