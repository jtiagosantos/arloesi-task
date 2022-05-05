import styled from 'styled-components';

export const Container = styled.div`
  max-width: 25rem;
  width: 100%;

  position: relative;
  padding: 1.5rem;
  background-color: var(--white-0);

  h1 {
    font-family: 'Nunito', sans-serif;
    color: var(--black-0);
    font-size: 1.3125rem;
    font-weight: 700;

    margin-bottom: 1rem;
  }

  > button {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    background-color: var(--white-0);
    border: none;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: var(--black-0);
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
`;
