import React, {createContext, useContext, useCallback, useState} from 'react';
import {v4} from 'uuid';
import ToastContainer from '../components/toastContainer/index.component';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({children}) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
      ({title, type, description}: Omit<ToastMessage, 'id'>) => {
        const id = v4();

        const toast = {
          id,
          type,
          title,
          description,
        };

        setMessages((oldMessages) => [...oldMessages, toast]);
      },
      [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) =>
      oldMessages.filter((message) => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export {ToastProvider, useToast};
