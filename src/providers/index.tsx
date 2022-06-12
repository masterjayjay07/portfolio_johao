import { AppProviderProps } from "./../interfaces/index";
import { TechsProvider } from "./techs";
import { CertificatesProvider } from "./certificates";

const Provider = ({ children }: AppProviderProps) => {
  return (
    <TechsProvider>
      <CertificatesProvider>{children}</CertificatesProvider>
    </TechsProvider>
  );
};

export default Provider;
