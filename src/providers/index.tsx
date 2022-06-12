import { AppProviderProps } from "./../interfaces/index";
import { TechsProvider } from "./techs";
import { CertificatesProvider } from "./certificates";
import { ProjectsProvider } from "./projects";

const Provider = ({ children }: AppProviderProps) => {
  return (
    <TechsProvider>
      <CertificatesProvider>
        <ProjectsProvider>{children}</ProjectsProvider>
      </CertificatesProvider>
    </TechsProvider>
  );
};

export default Provider;
