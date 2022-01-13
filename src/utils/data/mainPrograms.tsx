import MainProgramType from "../types/MainProgramType";

import InternetExplorerImage from "../../assets/img/InternetExplorer.png";
import ProgramsEnum from "../enums/programsEnum";
import InternetExplorer from "../../programs/internetExplorer/InternetExplorer";

const mainPrograms: MainProgramType[] = [
  {
    type: ProgramsEnum.InternetExplorer,
    image: InternetExplorerImage,
    component: <InternetExplorer />,
  },
];
export default mainPrograms;
