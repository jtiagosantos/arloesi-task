import { Container } from '@/components/CardList/styles';
import { FC, ReactNode } from 'react';

interface CardListProps {
  children: ReactNode;
}

export const CardList: FC<CardListProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
