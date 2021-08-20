import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 300px;
  padding: 1rem 2rem;
  border: 1px solid #542e91;
  border-radius: 0.5rem;
  background: #542E91;

  h2 {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: #FDDC05;
  }

  small {
    border-top: 1px solid #e5e5e5;
    padding-top: 1.5rem;
    margin-bottom: 1rem;
    color: #FDDC05;
    font-weight: 600;
  }
`;
