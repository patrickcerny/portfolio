import { ReactChild, ReactChildren } from "react";

interface WindowContainerMenuType {
  name: string;
  subMenu?: WindowContainerMenuType[];
}

export default interface WindowContainerType {
  menu: WindowContainerMenuType[];
  children: ReactChildren | ReactChild;
}
