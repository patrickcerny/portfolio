import MainProgramType from '../types/MainProgramType';

import InternetExplorerImage from '../../assets/img/InternetExplorer.png';
import ProgramsEnum from '../enums/programsEnum';
import InternetExplorer from '../../programs/internetExplorer/InternetExplorer';
import Commandline from '../../programs/commandline/Commandline';
import CommandlineImage from '../../assets/img/commandline/commandline.jpg';
const mainPrograms: MainProgramType[] = [
  {
    type: ProgramsEnum.InternetExplorer,
    image: InternetExplorerImage,
    component: <InternetExplorer />,
  },
  {
    type: ProgramsEnum.Commandline,
    image: CommandlineImage,
    component: <Commandline />,
  },
];
export default mainPrograms;
