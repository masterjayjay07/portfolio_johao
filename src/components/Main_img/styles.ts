import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c0d15;
  span {
    font-size: 1.5rem;
  }
  @media (max-width: 459px) {
    height: 200px;
  }
`;
