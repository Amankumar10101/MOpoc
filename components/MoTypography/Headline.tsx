"use client";
import React, { FC } from "react";
import { Typography, styled } from "@mui/material";


interface HeadlineProps {
  text: string;
  subtitle?: string;
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

const Headline: FC<HeadlineProps> = ({ text, subtitle }) => {
  return (
    <div>
      <HeadlineComponent variant="body1">{text}</HeadlineComponent>
      <SubtitleComponent variant="body2" sx={{ marginTop: "5px" }}>
        {subtitle}
      </SubtitleComponent>
    </div>
  );
};

export default Headline;
