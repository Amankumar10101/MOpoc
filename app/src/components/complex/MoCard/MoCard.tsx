// import styled, { css } from 'styled-components';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './MoCard.scss';
import { Box, Container } from '@mui/material';
import {ICardInterface,IBasicCard,IProgressBarInterface} from '../../../../interface';


export const MyTypography = styled(Typography)(() => ({
    color: "grey",
    fontSize: "12px",
    marginBottom:'2px'
}));

export const MyCard = styled(Card)((props : IBasicCard) => {
     return (

        {
            backgroundColor: "white",
            width: props.width,
            padding: "10px 10px"

        }
    )
});
export const MyCardHeadingContainer = styled(Box)((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "0px",
    margin: "0px",

}));
interface IMyCardHeading{
    color: string
}
export const MyCardHeading = styled(Typography)((props :IMyCardHeading) => ({
    color: props.color,
    fontSize: "20px",
    fontWeight: 'bold',
    marginBottom:'2px'

}));
export const MyCardSubHeading = styled(Typography)((props : IMyCardHeading) => {
    console.log(props.color); return ({
        color: props.color,
        fontSize: "15px",
        fontWeight: 'bold',
        marginBottom:'2px'
    })
});
export const MyCardActions = styled(CardActions)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1px 4px",
    border: "none",
    boxShadow: "none"

}));
export const CardLinks = styled(Button)(() => ({
    color: "grey",
    fontSize: "15px",
    fontWeight: 'bold',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    boxShadow: "none",
    textTransform: "none"

}));
export const StatusButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "#1b7028",
    cursor: "pointer",
    textTransform: "none"

}));
export const ProgressBar = styled(LinearProgress)(()=>({
    backgroundColor: "rgb(205 224 242)",
    borderRadius:"10px",
    '& .MuiLinearProgress-bar':{
        backgroundColor: "#1b7028",
        borderRadius:"10px"
    }
}));

export const ProgressContainer = (props : IProgressBarInterface) => {
    return (
        <div>
        <MyCardHeadingContainer>
        <MyCardSubHeading color="#1f7a93" >
                Funds: ${props.funds}
            </MyCardSubHeading>
            <MyCardSubHeading color="#1f7a93" >
                2/5
            </MyCardSubHeading>
        </MyCardHeadingContainer>
        
            <ProgressBar variant="determinate" value={40} />
        </div>
    )
}

function MoCard(props : ICardInterface) {
    console.log(props);
    return (
        <MyCard width="500px">
            <MyCardHeadingContainer>

                <MyCardHeading color="#1f7a93" >
                    {props.name}
                </MyCardHeading>
                <StatusButton variant='contained' >{props.status}</StatusButton>
            </MyCardHeadingContainer>
            <MyCardSubHeading color="#1f7a93" >
                {props.development}
            </MyCardSubHeading>
            <MyCardSubHeading color="grey" >
                {props.tech}
            </MyCardSubHeading>
            <MyTypography >
                {props.description}
            </MyTypography>
            <ProgressContainer funds={props.funds} variant="determinate" value={90} />

            <hr />
            <MyCardActions>
                <MyCardSubHeading color="#1f7a93" >
                    M3: {props.date}
                </MyCardSubHeading>
                <CardLinks >
                    See Details <ChevronRightIcon />
                </CardLinks>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </MyCardActions>
        </MyCard>
    )
}
export default MoCard;




// const Card = styled.div`
// text-align: left;
// width: 300px;
// height: 200px;
// `
// const CardHeading = styled.p`

// text-align: left;
// width: 300px;
// height: 200px;
// `