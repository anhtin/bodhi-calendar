import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { Header, CloseButtonWrapper, CloseButton } from './styled';
import { StyleOverrides } from './overrides';

ReactModal.setAppElement('#root');

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  children: ReactNode;
};

function Modal({ isOpen, onClose, heading, children }: ModalProps) {
  return (
    <>
      <StyleOverrides />
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        contentLabel={heading}
      >
        <Header>
          <h2>{heading}</h2>
        </Header>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>X</CloseButton>
        </CloseButtonWrapper>
        {children}
      </ReactModal>
    </>
  );
}

export default Modal;
