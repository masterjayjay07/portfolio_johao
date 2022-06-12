import { Container, ContainerSiteInfo } from "./styles";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
      <h4>Contatos</h4>
      <ul>
        <li>
          <BsFillTelephoneFill />
          <p>Telefone: </p>
          <p>(21)99519-3029</p>
        </li>
        <li>
          <SiGmail />
          <p>Email: </p>
          <p>johaopedro99@gmail.com</p>
        </li>
        <li>
          <BsLinkedin />
          <p>Linkedin: </p>
          <p>
            <a
              href="https://www.linkedin.com/in/johaopedro1500"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/johaopedro1500
            </a>
          </p>
        </li>
        <li>
          <BsGithub />
          <p>GitHub: </p>
          <p>
            <a
              href="https://github.com/masterjayjay07"
              target="_blank"
              rel="noreferrer"
            >
              github.com/masterjayjay07
            </a>
          </p>
        </li>
      </ul>
      <ContainerSiteInfo>
        <p>
          Este site foi feito com React JS e Typescript, em conjunto com as
          bibliotecas styled-components, react-router-dom e react-icons
        </p>
      </ContainerSiteInfo>
    </Container>
  );
};

export default Footer;
