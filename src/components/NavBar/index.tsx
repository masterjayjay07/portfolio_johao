import { Container, ContainerUl, LinkContainer } from "./styles";

const HamburguerNavBar = () => {
  return (
    <Container>
      <ContainerUl>
        <li>
          <LinkContainer href="/">Início</LinkContainer>
        </li>
        <li>
          <LinkContainer href="/projects">Meus projetos</LinkContainer>
        </li>
      </ContainerUl>
    </Container>
  );
};

export default HamburguerNavBar;
