import programsEnum from "../enums/programsEnum";

export default interface MainProgramType {
  image: any;
  type: programsEnum;
  component: JSX.Element;
  ref?: React.RefObject<any>;
}
