import { Container } from '@/components/Modal/styles';
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';

export interface ModalHandler {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: ReactNode;
}

const ImperativeModal: ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  { children },
  ref,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsModalOpen(true),
    close: () => setIsModalOpen(false),
  }));

  if (!isModalOpen) return null;

  return <Container>{children}</Container>;
};

export const Modal = forwardRef(ImperativeModal);
