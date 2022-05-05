import styled from 'styled-components';

export const Container = styled.div`
  max-width: 42rem;
  width: 100%;
  max-height: 3rem;
  height: 100%;

  position: relative;

  input {
    width: 100%;
    height: 100%;

    border-radius: 5px;
    border: none;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    padding-left: 2.7rem;

    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: var(--helpers-placeholder);

    outline: none;

    &::placeholder {
      color: var(--helpers-placeholder);
    }
  }

  img {
    position: absolute;
    left: 0.75rem;
    top: 30%;
  }
`;
