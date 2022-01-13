import { ReactChild, ReactChildren } from "react";
import ProgramsEnum from "../enums/programsEnum";

interface WindowContainerMenuType {
  name: string;
  subMenu?: WindowContainerMenuType[];
}

export default interface WindowContainerType {
  menu: WindowContainerMenuType[];
  children: ReactChildren | ReactChild;
  type: ProgramsEnum;
}
