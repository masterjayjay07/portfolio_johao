import { createContext, useContext, useState } from "react";
import {
  AppProviderProps,
  IArrayProjects,
  IProjects,
} from "../../interfaces/index";

export const ProjectsContext = createContext<IArrayProjects>(
  {} as IArrayProjects
);

export const ProjectsProvider = ({ children }: AppProviderProps) => {
  const [projects] = useState<IProjects[]>([
    {
      name: "Bora Marcar?",
      description: "",
      img: "",
      techs:
        "React JS, styled-components, Material UI, react-router-dom, Context Api, Axios",
      url: "https://bora-marcar.vercel.app/",
    },
    {
      name: "Kenzie Hub",
      description: "",
      img: "",
      techs: "React JS, styled-components, react-router-dom, Axios",
      url: "https://react-entrega-s2-kenzie-hub-masterjayjay07.vercel.app/",
    },
    {
      name: "Kenzie Shop",
      description: "",
      img: "",
      techs: "React JS, styled-components, Context Api",
      url: "https://react-entrega-s3-kenzishop-com-context-api-masterjayjay07.vercel.app/",
    },
    {
      name: "Do it.",
      description: "",
      img: "",
      techs: "React JS, Axios, styled-components, Context Api",
      url: "https://do-it-kenzie.vercel.app/dashboard",
    },
    {
      name: "nuKenzie",
      description: "",
      img: "",
      techs: "React JS",
      url: "https://react-entrega-s1-nu-kenzie-masterjayjay07.vercel.app/",
    },
    {
      name: "Burguer Kenzie",
      description: "",
      img: "",
      techs: "React JS",
      url: "https://react-entrega-s1-hamburgueria-da-kenzie-masterjayjay07.vercel.app/",
    },
    {
      name: "Ricky and Morty Api",
      description: "",
      img: "",
      techs: "React JS, Axios",
      url: "https://react-atividade-s1-buscando-mais-personagens-masterjayjay07.vercel.app/",
    },
    {
      name: "Jogos Azar",
      description: "",
      img: "",
      techs: "HTML, CSS, Javascript",
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s4-entrega-construa-um-jogo-de-azar-MasterJayJay07/",
    },
  ]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsList = () => useContext(ProjectsContext);
