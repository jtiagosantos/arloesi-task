import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
  padding?: string;
  textColor: string;
}

export const Container = styled.button<ContainerProps>`
  height: 48px;

  background-color: ${(props) => props.backgroundColor};

  border-radius: 4px;
  border: none;

  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.textColor};
  text-transform: uppercase;

  margin-top: 1.5rem;
  padding: ${(props) => props.padding ?? 0};

  transition: 0.2s filter;

  &:hover {
    filter: brightness(0.9);
  }
`;
