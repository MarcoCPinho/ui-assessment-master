import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;

  margin: 1px 0;
`;

export const Upload = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;

  span:first-child {
    font-size: 2rem;
    font-weight: 600;
    color: var(--light-green);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--light-grey);
  }
`;

export const LinesSaved = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  margin-left: 1px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;

  span:first-child {
    font-size: 2rem;
    font-weight: 600;
    color: var(--light-green);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--light-grey);
  }
`;
