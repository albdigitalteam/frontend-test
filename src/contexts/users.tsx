import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { IUsers } from '../sharedTypes';

type UsersContextData = {
  users: IUsers;
  getUsers(): Promise<void>;
};

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

const UsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUsers>([]);

  const getUsers = useCallback(async () => {
    const res = await api.get('/users');
    if (res.data) {
      setUsers(res.data);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ getUsers, users }}>
      {children}
    </UsersContext.Provider>
  );
};

function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}

export { UsersProvider, useUsers };
