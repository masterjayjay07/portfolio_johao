import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  min-height: 80px;
  border-bottom: 3px solid #1c1c1c;
  h1 {
    color: var(--color-linen);
  }
`;
