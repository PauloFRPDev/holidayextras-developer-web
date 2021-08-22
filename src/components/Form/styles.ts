import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      flex: 1;
      text-align: center;
      color: #fddc05;
    }

    > label {
      color: #fff;
      font-size: 0.9rem;
    }
  }

  input {
    width: 100%;

    padding: 0.5rem 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid #fff;
    outline: 0;
    margin-top: 0.4rem;

    &::placeholder {
      font-size: 0.9rem;
    }
  }

  button {
    width: 100%;
    margin-top: 1rem;
    background: #fddc05;
    padding: 0.7rem 2rem;
    border: 1px solid #fddc05;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover {
      background: ${darken(0.1, "#FDDC05")};
    }
  }

  > span {
    color: #fddc05;
  }
`;
