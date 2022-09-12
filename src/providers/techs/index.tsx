import { createContext, useContext, useState } from "react";
import { AppProviderProps, ITechs, IArrayTechs } from "../../interfaces/index";
export const TechsContext = createContext<IArrayTechs>({} as IArrayTechs);

export const TechsProvider = ({ children }: AppProviderProps) => {
  const [dark, setDark] = useState(true);
  const changeBackground = () => {
    setDark(!dark);
  };
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
      name: "Typescript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    },
    {
      name: "React JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "Vue JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    },
    {
      name: "Node JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "Sqlite",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
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
        dark,
        changeBackground,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export const useTechsList = () => useContext(TechsContext);
