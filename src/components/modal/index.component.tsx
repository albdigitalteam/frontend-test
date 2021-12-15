import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';

import {IModalProps} from '../../components/modal/modal.interface';

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  style,
  setIsOpen,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          ...style,
          backgroundColor: '#000000',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '90%',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#7c7c7d',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
