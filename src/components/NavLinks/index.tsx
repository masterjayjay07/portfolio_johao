import { LinkContainer, ContainerUl } from "./styles";
const NavLinks = () => {
  return (
    <ContainerUl>
      <li>
        <LinkContainer href="/">Início</LinkContainer>
      </li>
      <li>
        <LinkContainer href="/projects">Projetos pessoais</LinkContainer>
      </li>
      <li>
        <LinkContainer
          href="https://drive.google.com/file/d/1lxUnRd0YH3ijimO2zK_ZvQSLq1cDMNAb/view?usp=drive_link"
          target="_blank"
        >
          Meu Currículo
        </LinkContainer>
      </li>
      <li>
        <LinkContainer
          href="https://drive.google.com/file/d/1ev9g-_MyiK2D2upgsFnZ0NT4Fq_3_Zwo/view?usp=drive_link"
          target="_blank"
        >
          My Resume
        </LinkContainer>
      </li>
    </ContainerUl>
  );
};

export default NavLinks;
