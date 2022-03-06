import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
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

export const Body = styled.div`
  display: flex;
  height: 90vh;
  width: 90vw;
  margin-top: 1rem;
  border-radius: 1rem;
`;

export const TextArea = styled.div`
  width: 70%;

  input {
    border-radius: 0.5rem;
    border-width: 1px;
    width: 25rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }

  textarea {
    resize: none;
    width: 62vw;
    height: 82vh;
    border-radius: 1rem;
    padding: 0.5rem 0 0 0.5rem;
    margin-top: 1rem;
  }
`;

export const TextAreaButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;

    width: 20rem;

    button {
      background: none;
      border: none;
      padding: 0 16px;
      border-radius: 10px;
      font-weight: 400;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ffffff')};
      }
    }
  }
`;

export const NotesArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  width: 30%;
  margin-left: 1rem;

  > div:first-child {
    margin-top: 1rem;
    min-height: 3rem;
  }
`;

export const Note = styled.div`
  display: flex;

  button {
    background: none;
    border: none;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 400;
    transition: background-color 0.2s;
    margin-left: 1rem;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }
  }
`;
