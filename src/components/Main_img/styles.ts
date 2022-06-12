import styled from "styled-components";
import main_img from "../../assets/images/main_img.jpeg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c0d15;
  div {
    background-image: url(${main_img});
    background-repeat: no-repeat;
    object-fit: cover;
    width: 460px;
    height: 200px;
    @media (max-width: 459px) {
      display: none;
    }
  }
`;
