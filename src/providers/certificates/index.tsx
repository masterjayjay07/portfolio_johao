import frontendwebdev from "../../assets/images/frontwebdev.jpeg";
import fullstackwebdev from '../../assets/images/kenziefullstack.jpeg';
import english from "../../assets/images/english.jpeg";
import unittests from '../../assets/images/aluratestes.jpeg';
import reduxstates from '../../assets/images/aluraredux.jpeg';
import hooks from '../../assets/images/alurahooks.jpeg';
import reactquery from '../../assets/images/alurareactquery.jpeg';
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
      name: "Desenvolvedor Full Stack",
      img: fullstackwebdev,
      school: "Kenzie Academy Brasil",
      url: "https://kenzie.com.br/",
    },
    {
      name: "Testes unitários e integração",
      img: unittests,
      school: "Alura",
      url: "https://www.alura.com.br/",
    },
    {
      name: "Gerenciando estados com Redux",
      img: reduxstates,
      school: "Alura",
      url: "https://www.alura.com.br/",
    },
    {
      name: "React Hooks",
      img: hooks,
      school: "Alura",
      url: "https://www.alura.com.br/",
    },
    {
      name: "React Query",
      img: reactquery,
      school: "Alura",
      url: "https://www.alura.com.br/",
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
