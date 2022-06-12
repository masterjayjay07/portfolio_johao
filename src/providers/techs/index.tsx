import { createContext, useContext, useState } from "react";
import { AppProviderProps, ITechs, IArrayTechs } from "../../interfaces/index";

export const TechsContext = createContext<IArrayTechs>({} as IArrayTechs);

export const TechsProvider = ({ children }: AppProviderProps) => {
  const [techs] = useState<ITechs[]>([
    {
      name: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    },
    {
      name: "Typecript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    },
    {
      name: "React JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg",
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
  ]);

  return (
    <TechsContext.Provider
      value={{
        techs,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export const useTechsList = () => useContext(TechsContext);
