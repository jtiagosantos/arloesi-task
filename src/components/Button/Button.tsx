import { Container } from '@/components/Button/styles';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  backgroundColor: string;
  padding?: string;
  textColor: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  ...styles
}) => {
  return (
    <Container type={type} onClick={onClick} {...styles}>
      {children}
    </Container>
  );
};
