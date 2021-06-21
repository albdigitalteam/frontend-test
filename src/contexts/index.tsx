import React from 'react';

import { ToastProvider } from './toast';
import { PostsProvider } from './posts';
import { CommentsProvider } from './comments';
import { UsersProvider } from './users';

const AppProvider: React.FC = ({ children }) => (
  <PostsProvider>
    <CommentsProvider>
      <UsersProvider>
        <ToastProvider>{children}</ToastProvider>
      </UsersProvider>
    </CommentsProvider>
  </PostsProvider>
);

export default AppProvider;
