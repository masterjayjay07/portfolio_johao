import { useProjectsList } from "../../providers/projects";
import { Container, InfosContainer } from "./styles";

const ProjectsSection = () => {
  const { projects } = useProjectsList();

  return (
    <Container>
      <ul>
        {projects.map((element, index) => (
          <li key={index}>
            <h3>
              <a href={element.url} target="_blank" rel="noreferrer">
                {element.name}
              </a>
            </h3>
            <a href={element.url} target="_blank" rel="noreferrer">
              <img alt={element.name} src={element.img} />
            </a>
            <InfosContainer>
              <h5>Descrição do app:</h5>
              <div>
                <p>{element.description}</p>
              </div>
              <h5>Tecnologias usadas:</h5>
              <div>
                <p>{element.techs}</p>
              </div>
              <h6>
                <a href={element.github} target="_blank" rel="noreferrer">
                  Github do projeto
                </a>
              </h6>
            </InfosContainer>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProjectsSection;
