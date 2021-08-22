import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  min-height: 60%;
  min-width: 60%;
  max-height: 80%;
  overflow-x: hidden;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: #542e91;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    > span {
      font-size: 1.5rem;
    }

    > small {
      font-size: 0.9rem;
    }
  }

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > div {
      padding: 0.5rem;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        width: 20px;
        height: 20px;
        color: #fddc05;
      }

      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: ${darken(0.1, "#e5e5e599")};
      }
    }
  }
`;
