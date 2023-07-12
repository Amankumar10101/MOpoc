
export interface MoDocCardProps  {
    id : number;
    title: string;
    label: string;
    labelIdle:string;
    type: string;
    attach: MyFile[];
  setAttach: Function;
    // attach: MyFile[];
    // setAttach: React.Dispatch<React.SetStateAction<MyFile[]>>;

}
export interface MyFile {
  name: string;
  filename: string;
  fileSize: number;
  fileType:string;
}

// export interface MoDocActionCard {
//     cardData : MoDocCardProps[]
// }