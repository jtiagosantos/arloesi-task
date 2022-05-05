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

  form {
    display: flex;
    flex-direction: column;

    label {
      font-family: 'Open Sans', sans-serif;
      color: var(--black-0);
      font-weight: 600;
      font-size: 1rem;

      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      background: var(--white-0);
      border: 1px solid var(--helpers-placeholder);
      border-radius: 5px;

      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      color: var(--helpers-placeholder);

      padding: 7px;
      outline: none;
    }

    input {
      height: 49px;
      margin-bottom: 1rem;
    }

    textarea {
      height: 135px;
      resize: none;
    }
  }
`;
