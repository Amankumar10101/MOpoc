export interface ICardProps {
    id: number;
    filename: string;
    title: string;
    label: string;
  }

  export interface IActionCard {
    cardData: ICardProps[];
  }