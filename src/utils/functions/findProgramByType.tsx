import InternetExplorer from "../../programs/internetExplorer/InternetExplorer";
import mainPrograms from "../data/mainPrograms";
import ProgramsEnum from "../enums/programsEnum";
import MainProgramType from "../types/MainProgramType";

export default function findProgramByType(type: ProgramsEnum): MainProgramType {
  let component = mainPrograms.find((item) => item.type === type);
  if (!component)
    component = {
      image: "",
      type: ProgramsEnum.InternetExplorer,
      component: <InternetExplorer />,
    };
  return component;
}
