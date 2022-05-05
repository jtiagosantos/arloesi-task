import { Container } from '@/components/Button/styles';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  backgroundColor: string;
  padding?: string;
  textColor: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, ...styles }) => {
  return (
    <Container onClick={onClick} {...styles}>
      {children}
    </Container>
  );
};
