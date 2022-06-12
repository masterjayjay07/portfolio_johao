import { ReactNode } from "react";

export interface AppProviderProps {
  children: ReactNode;
}

export interface IArrayTechs {
  techs: ITechs[];
}

export interface ITechs {
  name: string;
  icon: string;
}

export interface IArrayCertificates {
  certificates: ICertificates[];
}

export interface ICertificates {
  name: string;
  img: string;
  school: string;
  url: string;
}
