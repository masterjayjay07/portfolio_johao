import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--color-lavender-grey);
  color: var(--color-light-black);
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  h4 {
    padding: 6px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      svg {
        color: var(--color-light-black);
      }
      p {
        color: var(--color-light-black);
        a {
          color: #000080;
          :hover {
            color: #0000ff;
          }
        }
      }
    }
  }
`;

export const ContainerSiteInfo = styled.div`
  margin: 5px 0;
  background-color: var(--color-dark-grey);
  width: 100%;
  padding: 6px;
`;
