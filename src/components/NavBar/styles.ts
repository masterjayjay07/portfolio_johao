import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  li {
    border-right: 3px solid #1c1c1c;
    padding: 0 5px;
  }
`;

export const LinkContainer = styled.a`
  width: 1.5rem;
  color: var(--color-linen);
  :hover {
    text-decoration: underline;
  }
`;
