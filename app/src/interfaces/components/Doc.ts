
export interface MoDocCardProps  {
    id : number;
    title: string;
    label: string;
    labelIdle:string;
    onClick: () => void;
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