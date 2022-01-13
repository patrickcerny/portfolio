import React from "react";
import ProgramsEnum from "../enums/programsEnum";

export default interface ActiveRefsType {
  type: ProgramsEnum;
  ref: React.MutableRefObject<any>;
}
