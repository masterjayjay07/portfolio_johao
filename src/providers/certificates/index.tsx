import frontendwebdev from "../../assets/images/frontwebdev.jpeg";
import english from "../../assets/images/english.jpeg";
import { createContext, useContext, useState } from "react";
import {
  AppProviderProps,
  ICertificates,
  IArrayCertificates,
} from "../../interfaces/index";

export const CertificatesContext = createContext<IArrayCertificates>(
  {} as IArrayCertificates
);

export const CertificatesProvider = ({ children }: AppProviderProps) => {
  const [certificates] = useState<ICertificates[]>([
    {
      name: "Desenvolvedor Front End",
      img: frontendwebdev,
      school: "Kenzie Academy Brasil",
      url: "https://kenzie.com.br/",
    },
    {
      name: "Curso de Inglês",
      img: english,
      school: "Fisk",
      url: "https://fisk.com.br/unidades/guadalupe",
    },
  ]);
  return (
    <CertificatesContext.Provider
      value={{
        certificates,
      }}
    >
      {children}
    </CertificatesContext.Provider>
  );
};

export const useCertificatesList = () => useContext(CertificatesContext);
