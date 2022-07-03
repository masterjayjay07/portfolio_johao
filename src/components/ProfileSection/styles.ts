import styled from "styled-components";

export const Container = styled.section`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ContainerImg = styled.div`
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 300px;
    height: 300px;
    border-radius: 160px;
    transition: 0.2s;
    :hover {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      transition: 0.5s;
    }
  }
`;

export const ContainerBio = styled.div`
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 10px;
  @media (min-width: 640px) {
    align-items: flex-start;
  }
  h2 {
    font-weight: bold;
  }
`;

export const ContainerUl = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  gap: 15px;
  li {
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    transition: 0.2s;
    :last-child {
      img {
        background-color: #fff;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      :hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;
