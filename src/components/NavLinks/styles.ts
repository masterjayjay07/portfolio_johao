import styled from "styled-components";

export const ContainerUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  li {
    border-right: 3px solid #1c1c1c;
    padding: 0 5px;
  }
  @media (max-width: 459px) {
    flex-direction: column;
    position: absolute;
    top: 140px;
    right: 0;
    width: 100%;
    background: #181818;
    border-top: 2px solid #1c1c1c;
    padding: 30px;
  }
`;

export const LinkContainer = styled.a`
  width: 1.5rem;
  color: var(--color-linen);
  transition: 0.5s;
  padding: 2px;
  border-bottom: 2px solid transparent;
  border-radius: 3px;
  :hover {
    transition: 0.5s;
    border-bottom: 2px solid var(--color-linen);
  }
`;
