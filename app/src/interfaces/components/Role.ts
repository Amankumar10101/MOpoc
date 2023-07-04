export interface ICardProps {
    id: number;
    filename: string;
    // handleCardClick: ()=>void;
    title: string;
    label: string;
  }

  export interface IActionCard {
    cardData: ICardProps[];
    onClick: (title: string)=> void;
  }