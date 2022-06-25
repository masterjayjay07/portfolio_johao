import { useProjectsList } from "../../providers/projects";
import { Container } from "./styles";

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
            <img alt={element.img} />
            <h5>Descrição do app:</h5>
            <p>{element.description}</p>
            <h5>Tecnologias usadas:</h5>
            <p>{element.techs}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProjectsSection;
