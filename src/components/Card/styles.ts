import styled from 'styled-components';

export const Container = styled.div`
  max-width: 46.5rem;
  width: 100%;
  min-height: 6.875rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1rem;
  border-radius: 5px;
  background-color: var(--white-0);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  div {
    width: 95%;

    h1 {
      font-family: 'Nunito', sans-serif;
      color: var(--black-0);
      font-size: 1.3125rem;
      font-weight: 700;

      margin-bottom: 13px;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      color: var(--black-1);
      font-size: 1rem;
    }
  }

  button {
    background: none;
    border: none;

    img {
      width: 25px;
      height: 24px;
    }
  }
`;
