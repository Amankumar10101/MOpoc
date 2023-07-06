import React, { FC } from "react";
import { Typography, styled } from "@mui/material";


export interface IHeadlineProps {
  text: string;
}
export interface IMoleculeInterface{
    className?: string,
    children:React.ReactNode| string
}

const HeadlineComponent = styled(Typography)`
  && {
    // font-style: normal;
    // font-weight: 700;
    font-size: 1.75rem;
    font-family: Roboto;
    line-height: 2.25rem;
    // display: flex;
    // align-items: center;
    color: '#585858';
  }
`;
const SubtitleComponent = styled(Typography)`
  && {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: rgba(88, 88, 88, 0.7);
  }
`;

export const Headline: FC<IHeadlineProps> = ({ text }) => {
  return (
      <HeadlineComponent variant="body1">{text}</HeadlineComponent>
  );
};

export const SubHeadline: FC<IHeadlineProps> = ({ text}) => {
    return (
        <SubtitleComponent variant="body2" >
          {text}
        </SubtitleComponent>
    );
  };


export function Div({className, children}:IMoleculeInterface){
    return (
        <div className={className}>{children}</div>
    )
}

export function Typography1({className, children}:IMoleculeInterface){
    return(
        <h5 className={className}>{children}</h5>
    )

}
export function Typography2({className, children}:IMoleculeInterface){
    return(
        <h6 className={className}>{children}</h6>
    )

}
export function Typography3({className, children}:IMoleculeInterface){
    return(
        <p className={className}>{children}</p>
    )

}
