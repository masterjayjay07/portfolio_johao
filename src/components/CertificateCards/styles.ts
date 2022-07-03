import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  border-top: 3px solid #1c1c1c;
  h2 {
    padding: 10px;
  }
`;

export const ContainerCards = styled.div`
  max-width: 340px;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: auto;
  div {
    border: 2px solid var(--color-linen);
    background-color: var(--color-light-black);
    border-radius: 3px;
    padding: 5px;
    flex-grow: 1;
    flex-shrink: 2;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    gap: 5px;
    img {
      max-width: 320px;
      height: 300px;
      border-radius: 5px;
    }
    p {
      a {
        color: var(--color-linen);
      }
    }
  }
`;
