import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
    :hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
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