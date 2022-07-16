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
      min-height: 445px;
      border-radius: 5px;
      background-color: var(--color-lavender-grey);
      color: var(--color-light-black);
      padding: 5px;
      a {
        color: var(--color-light-black);
        :hover {
          text-decoration: underline;
        }
      }
      img {
        width: 100%;
        height: 200px;
        transition: 0.3s;
        :hover {
          filter: brightness(0.5);
          transition: 0.5s;
        }
      }
      h6 {
        a {
          color: var(--color-lavender-grey);
          padding: 4px;
          background-color: var(--color-light-black);
          transition: 0.2s;
          border-radius: 3px;
          border: 2px solid transparent;
          :hover {
            background-color: var(--color-dark-grey);
            color: var(--color-light-black);
            transition: 0.3s;
            border: 2px solid var(--color-light-black);
          }
        }
      }
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 200px;
  div {
    min-height: 65px;
  }
`;
