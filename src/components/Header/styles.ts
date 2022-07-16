import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #1c1c1c;
  padding: 5px;
  div {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    padding: 20px;
    min-height: 80px h1 {
      color: var(--color-linen);
      flex-grow: 1;
      flex-shrink: 2;
      flex-basis: 0;
      font-size: 1.6rem;
    }
    nav {
      flex-grow: 1;
      flex-shrink: 2;
      flex-basis: 0;
    }
  }
`;
