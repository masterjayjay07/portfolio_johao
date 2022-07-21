import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsSection from "../../components/projectsSection";
import WhatsappButton from "../../components/WhatsappButton";
import { useTechsList } from "../../providers/techs";

const Projects = () => {
  const { dark } = useTechsList();
  return (
    <div
      style={
        dark
          ? { color: "#f7ece1", backgroundColor: "#212121" }
          : { color: "#212121", backgroundColor: "#f7ece1" }
      }
    >
      <Header />
      <ProjectsSection />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Projects;
