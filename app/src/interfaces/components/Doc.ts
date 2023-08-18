import { ActualFileObject } from "filepond";

export interface MoDocCardProps  {
    id : number;
    title: string;
    label?: string;
    labelIdle:string;
    type: string;
    attach: MyFile[];
  setAttach: Function;
  setText?: Function;
  
    // attach: MyFile[];
    // setAttach: React.Dispatch<React.SetStateAction<MyFile[]>>;

}
export interface MyFile {
  fileAll: ActualFileObject;
  
  // filename: string;
  // fileSize: number;
  fileType:string;
}

// export interface MoDocActionCard {
//     cardData : MoDocCardProps[]
// }