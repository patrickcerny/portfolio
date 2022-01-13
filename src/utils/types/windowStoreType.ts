import ProgramsEnum from '../enums/programsEnum';

export default interface WindowStoreType {
  type: ProgramsEnum;
  active: boolean;
  shown: boolean;
}
