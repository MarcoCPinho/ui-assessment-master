import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  width: 98.1vw;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  a {
    text-decoration: none;
    color: #000;
  }

  div:first-child {
    margin-left: 3rem;
    text-align: center;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 20rem;
    margin-right: 2rem;
  }

  svg {
    height: 14px;
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const Support = styled.div`
  margin-top: 1rem;
  width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

export const SupportContanct = styled.div`
  span {
    font-size: 0.8rem;
    color: var(--light-grey);
  }
`;

export const Body = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
  margin-top: 1rem;

  padding: 1rem;
`;
