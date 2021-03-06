import { Container, ContainerBio, ContainerImg, ContainerUl } from "./styles";
import img from "../../assets/images/foto_perfil.jpg";
import { useTechsList } from "../../providers/techs";

const ProfileSection = () => {
  const { techs } = useTechsList();

  return (
    <Container>
      <ContainerImg data-aos="fade-right">
        <img alt="johão" src={img} />
      </ContainerImg>
      <ContainerBio data-aos="fade-down">
        <h2>Desenvolvedor Full Stack</h2>
        <p>
          Sou um desenvolvedor Full Stack e atualmente estou estudando
          desenvolvimento Back End em Python e Django na Kenzie Academy.
        </p>
        <p>
          Minha paixão por tecnologia veio do interesse de entender como as
          coisas funcionam e das infinitas possibilidades de criar alguma coisa.
          Hoje tenho um bom conhecimento nas tecnologias usadas em Front-End,
          consumo de APIs e uso de bibliotecas.
        </p>
        <h3>Tenho conhecimento em:</h3>
        <ContainerUl>
          {techs.map((element, index) => (
            <li key={index} data-aos="fade-left">
              <img src={element.icon} alt={`${element.name}-img`} />
              <h4>{` - ${element.name}`}</h4>
            </li>
          ))}
        </ContainerUl>
      </ContainerBio>
    </Container>
  );
};

export default ProfileSection;
