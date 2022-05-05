import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  section {
    width: 100%;
    max-height: 3rem;
    height: 100%;

    display: flex;
    justify-content: center;
    gap: 1.125rem;

    padding: 0 1.125rem;

    transform: translateY(-50%);
  }
`;
