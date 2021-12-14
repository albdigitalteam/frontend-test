import React from 'react';
import Modal from '../../../components/modal/index.component';

import {IModalProps} from '../../../components/modal/modal.interface';

const ModalNewPost: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} style={{height: '90vh'}}>
      <h1>Modal novo post</h1>
    </Modal>
  );
};

export default ModalNewPost;
