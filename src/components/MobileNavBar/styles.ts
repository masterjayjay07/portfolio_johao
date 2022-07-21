import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 70px;
    height: 100px;
    cursor: pointer;
  }
  @media (min-width: 560px) {
    display: none;
  }
`;
