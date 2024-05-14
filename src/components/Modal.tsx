import { type FC, type ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ModalProps {
  id: string;
  title?: string | undefined;
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  footer?: ReactNode | undefined;
}

const ModalWrapper = styled.div`
  position: fixed;
  bottom: -120%;
  left: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  transition: all 300ms ease;
  overflow: hidden;

  &.open {
    bottom: 0;
    transition: all 300ms ease;
  }
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: var(--tc-black);
`;

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background: var(--tc-panel);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  position: relative;
  cursor: pointer;
  z-index: 1;
  width: 24px;
  height: 24px;
  &:before, &:after {
    content: '';
    top: -1px;
    position: absolute;
    width: 2px;
    height: 24px;
    background: var(--tc-gray);
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
`;

const ModalContent = styled.div`
  padding: 20px;
  width: 100%;
  background: var(--tc-panel);
`;

const ModalFooter = styled.div`
  width: 100%;
  padding: 20px;
  background: var(--tc-panel);
`;

export const Modal: FC<ModalProps> = ({ id, children, onClose, isOpen, title, footer }) => {
  const [open, setOpen] = useState('');

  useEffect(() => {
    if (isOpen) {
      setOpen(id);
    } else {
      setOpen('');
    }
  }, [isOpen, id]);

  return (
    <ModalWrapper id={id} key={id} className={open === id ? 'open' : 'close'}>
      <ModalHeader>
        {title ? <ModalTitle>{title}</ModalTitle> : <div />}
        <CloseButton onClick={onClose} />
      </ModalHeader>
      <ModalContent>
        {children}
      </ModalContent>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalWrapper>
  );
};
