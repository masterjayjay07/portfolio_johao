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
          Sou um Desenvolvedor Full Stack com 3 anos de experiência em diversos segmentos do desenvolvimento web, como sites em React e Vue, apps em React Native e APIs em Node js.
        </p>
        <p>
          Minha jornada no cenário tecnológico me proporcionou uma compreensão profunda dessas tecnologias, permitindo-me ter uma participação importante no desenvolvimento de equipes e contribuir significativamente para projetos bem-sucedidos. Especializo-me em criar soluções inovadoras e tenho um histórico comprovado de entrega de resultados de alta qualidade.
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
