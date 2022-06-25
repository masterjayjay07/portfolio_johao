import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
  ul {
    display: flex;
    align-items: center;
    max-width: 90%;
    overflow: auto;
    gap: 10px;
    height: 490px;
    li {
      min-width: 300px;
      min-height: 400px;
      border-radius: 5px;
      background-color: var(--color-lavender-grey);
      color: var(--color-light-black);
      padding: 5px;
      a {
        color: var(--color-light-black);
      }
      img {
        width: 90%;
        height: 200px;
      }
    }
  }
`;
