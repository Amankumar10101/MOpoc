import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  styled,
  Theme,
  CardMedia,
} from "@mui/material";

import Image from "next/image";

import { IActionCard, ICardProps } from "../../interfaces/components/Role";


const CardContainer = styled(Grid)(({ theme }: { theme: Theme }) => ({
  width: "39.5vw",
  marginTop: theme.spacing(1.31),
  display: "flex",

  justifyContent: "space-between",
  // maxWidth: 300,
  maxWidth: "31.625rem",
}));

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  width: "15.86vw",
  height: "21.56vw",
  marginBottom: theme.spacing(6.25),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
}));

interface MoRoleProps extends ICardProps {
  onClick?: (title: string) => void;
}

const MoRole: React.FC<MoRoleProps> = ({ id, filename, title, label, onClick }) => {
  
  // const getImageUrl = (filename) => {
  //   return require(``).default
  // }
  return (
    <>
      <div>
        <CardContainer container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <StyledCard >
              <Image
                src={`/image/${filename}`}
                alt={label}
                width={128}
                height={184}
                style={{ height: "66%", width: "63%" }}
              />
              {/* <CardMedia component="img" height="140" image={getImageUrl(props.filename)} alt={props.label} /> */}
            </StyledCard>
            <div>{title}</div>
          </div>

          {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StyledCard>
        <Image  src='/Image/Brazuca Planning.png' alt='Provider' width={128} height={184} style={{height: '66%', width: '63%'}}/>
        </StyledCard>
        <div>{props.title}</div>
    </div>  */}
        </CardContainer>
      </div>
    </>
  );
};

export default MoRole;
