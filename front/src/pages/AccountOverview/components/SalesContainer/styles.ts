import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    div {
      span {
        margin-left: 0.5rem;
        font-weight: 600;
      }
    }
  }

  > span {
    margin-top: 1rem;
    font-size: 0.9rem;

    span {
      font-weight: 600;
    }
  }
`;
