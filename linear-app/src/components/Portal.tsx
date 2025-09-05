import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

export const Portal = ({ children }: Props) => {
  const modalRoot = document.getElementById('root-modal');
  return modalRoot ? createPortal(children, modalRoot) : null;
};
