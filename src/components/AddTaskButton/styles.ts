import styled from 'styled-components';

export const Container = styled.button`
  width: 54px;
  max-height: 3rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--brand-secondary-0);
  border: none;
  border-radius: 4px;

  transition: 0.2s filter;

  &:hover {
    filter: brightness(0.9);
  }
`;
