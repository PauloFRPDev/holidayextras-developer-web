import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;

  align-items: center;

  max-width: 20rem;
  width: 100%;

  padding: 2rem;

  background: #542e91;

  > span {
    margin-bottom: 4rem;
    font-size: 3rem;
    font-weight: 600;
    color: #fddc05;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    > a {
      padding: 1rem;

      color: #000;
      background: #fddc05;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      transition: 0.3s ease;

      &:hover {
        background: ${darken(0.1, "#FDDC05")};
      }
    }
  }
`;
