import { createContext, useContext, useState } from "react";
import {
  AppProviderProps,
  IArrayProjects,
  IProjects,
} from "../../interfaces/index";
import { projectImgs } from "../../assets/images";

export const ProjectsContext = createContext<IArrayProjects>(
  {} as IArrayProjects
);

export const ProjectsProvider = ({ children }: AppProviderProps) => {
  const [projects] = useState<IProjects[]>([
    {
      name: "Bora Marcar?",
      description:
        "Um app que controla os seus eventos distribuindo os itens a serem levados de forma justa para todos os participantes",
      img: projectImgs[0],
      techs:
        "React JS, styled-components, Material UI, react-router-dom, Context Api, Axios",
      url: "https://bora-marcar.vercel.app/",
      github: "https://github.com/masterjayjay07/capstone-m3",
    },
    {
      name: "Kenzie Hub",
      description:
        "Um app que cadastra tecnologias e seus níveis para o seu perfil pessoal",
      img: projectImgs[1],
      techs: "React JS, styled-components, react-router-dom, Axios",
      url: "https://react-entrega-s2-kenzie-hub-masterjayjay07.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-masterjayjay07",
    },
    {
      name: "Kenzie Shop",
      description:
        "Um E-commerce personalizado para funcionar com qualquer categoria de produtos. Totalmente completo com carrinho e contador de produtos",
      img: projectImgs[2],
      techs: "React JS, styled-components, Context Api",
      url: "https://react-entrega-s3-kenzishop-com-context-api-masterjayjay07.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-masterjayjay07",
    },
    {
      name: "Do it.",
      description: "Um app para organizar suas tarefas diárias.",
      img: projectImgs[3],
      techs: "React JS, Axios, styled-components, Context Api",
      url: "https://do-it-kenzie.vercel.app/dashboard",
      github: "https://github.com/masterjayjay07/do-it-kenzie",
    },
    {
      name: "nuKenzie",
      description:
        "Um app que faz o cálculo das suas entradas e saídas monetárias, com opções de filtro para melhor gerenciamento",
      img: projectImgs[4],
      techs: "React JS",
      url: "https://react-entrega-s1-nu-kenzie-masterjayjay07.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-masterjayjay07",
    },
    {
      name: "Burguer Kenzie",
      description:
        "Um e-commerce de fast food completo com filtros e carrinho.",
      img: projectImgs[5],
      techs: "React JS",
      url: "https://react-entrega-s1-hamburgueria-da-kenzie-masterjayjay07.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-masterjayjay07",
    },
    {
      name: "Ricky and Morty Api",
      description:
        "Uma página que faz requisições na API ricky and morty para criar os cards de personagens em tela, com divisão por páginas",
      img: projectImgs[6],
      techs: "React JS, Axios",
      url: "https://react-atividade-s1-buscando-mais-personagens-masterjayjay07.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s1-buscando-mais-personagens-masterjayjay07",
    },
    {
      name: "Jogos Azar",
      description:
        "Uma página de jogos de azar baseados em Pokémon, que conta com um caça palavras e um pedra papel e tesoura",
      img: projectImgs[7],
      techs: "HTML, CSS, Javascript",
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s4-entrega-construa-um-jogo-de-azar-MasterJayJay07/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m1-entrega-s4-entrega-construa-um-jogo-de-azar-MasterJayJay07",
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
