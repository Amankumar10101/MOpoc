"use client";
import React, { FC } from "react";
import { Typography, styled } from "@mui/material";
// import styles from "../../styles/variables.module.scss";

interface SubtitleProps {
  text: string;
  subtitle?: string;
}

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

const Headline: FC<SubtitleProps> = ({ text, subtitle }) => {
  return (
    <div>
      <SubtitleComponent variant="body2" sx={{ marginTop: "5px" }}>
        {subtitle}
      </SubtitleComponent>
    </div>
  );
};

export default Headline;
