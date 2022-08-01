import { LinkContainer, ContainerUl } from "./styles";
const NavLinks = () => {
  return (
    <ContainerUl>
      <li>
        <LinkContainer href="/">Início</LinkContainer>
      </li>
      <li>
        <LinkContainer href="/projects">Meus projetos</LinkContainer>
      </li>
      <li>
        <LinkContainer
          href="https://drive.google.com/file/d/1yQz_rLsRmJwQqWpp0rewqyDMiJsGr_sy/view?usp=sharing"
          target="_blank"
        >
          Meu Currículo
        </LinkContainer>
      </li>
    </ContainerUl>
  );
};

export default NavLinks;
