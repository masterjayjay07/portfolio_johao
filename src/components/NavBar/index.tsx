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
        <li>
          <LinkContainer
            href="https://drive.google.com/file/d/19MKK8z_jwgA8Sz2VM1aCdeA7LzM9oIsZ/view?usp=sharing"
            target="_blank"
          >
            Meu Currículo
          </LinkContainer>
        </li>
      </ContainerUl>
    </Container>
  );
};

export default HamburguerNavBar;
