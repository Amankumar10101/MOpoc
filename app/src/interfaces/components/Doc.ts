
export interface MoDocCardProps  {
    id : number;
    title: string;
    label: string;
    labelIdle:string;
    onClick: () => void;
    type: string;
    attach: MyFile | null;
  setAttach: (id: number, file: MyFile | null) => void;
    // attach: MyFile[];
    // setAttach: React.Dispatch<React.SetStateAction<MyFile[]>>;

}
interface MyFile {
    name: string;
    filename: string;
    fileSize: number;
  }

// export interface MoDocActionCard {
//     cardData : MoDocCardProps[]
// }