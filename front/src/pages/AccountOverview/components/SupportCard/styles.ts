import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 1rem;
`;

export const CaptionLetter = styled.div`
  display: flex;
  margin-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #ffc732;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-between;

  span {
    margin: 0 0.5rem;
    color: var(--light-grey);
  }
`;
