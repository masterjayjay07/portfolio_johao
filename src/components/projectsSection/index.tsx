import { useProjectsList } from "../../providers/projects";
import { Container } from "./styles";

const ProjectsSection = () => {
  const { projects } = useProjectsList();

  return <Container>projects</Container>;
};

export default ProjectsSection;
