import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import { Chart, PieSeries, Title, } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';
import { MyCard } from '../MoCard/MoCard';
import "./MoDoughnut.scss";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Tooltip, Legend} from 'chart.js';
import {DoughnutInterface} from '../../../../interface';

Chart.register(ArcElement,Tooltip, Legend);





function MoDoughnut(props: DoughnutInterface) {



  const data = {
    // labels: ['Red', 'Blue', 'Yellow', ],
    datasets: [
      {
        // label: '# of Votes',
        data: props.values,
        backgroundColor: props.colors,
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
          
        // ],
        borderWidth: 0,
      },
    ],
  };
  return(
  
  <MyCard className="doughnut-card" width="400px">
  <div style={{width:'200px', height:'200px', position:'relative'}} >
  <Doughnut data={data} options= {{ cutout: '85%' }} width={100} height={100} />
  <div style={{ position: 'absolute', width: '100%', top: '50%', left: 0, textAlign: 'center', marginTop: '-15px', fontSize:'15px'}}>
      <span>11<br/>Total projects</span>
  </div>
  </div>
            <div className='doughnut-values'>
            {props.labels.map((label,index)=>(<span className='doughnut-label' style={{borderLeft:" 3px solid "+props.colors[index]}}>{label} {props.values[index]}</span>))}
            </div>
        </MyCard>

  )
    
}
export default MoDoughnut;




{/* <div style={{ width: '300px', height: '300px', position: 'relative'}}>
  
  <div style={{ position: 'absolute', width: '100%', top: '50%', left: 0, textAlign: 'center', marginTop: '-28px',  lineHeight: '20px'}}>
      <span>11 total projects</span>
  </div>
</div> */}











// const data = [
//     { region: 'Completed', val: 6 },
//     { region: 'In Progress', val: 2 },
//     { region: 'Unassigned', val: 3 },
// ];

// export const MyChart = styled(Chart)(() => ({
//     height: "200px !important",
//     width: "200px"
// }));


// function MoDoughnut() {
//     // const { data: chartData } = this.state;
// const slice=()=>{

// }
//     return (
//         <MyCard className="doughnut-card">
//             <MyChart
//                 data={data}
//             >
//                 <PieSeries
//                     valueField="val"
//                     argumentField="region"
//                     innerRadius={0.8}
//                     // pointComponent={<slice></slice>}
                    
//                 />
//                 <Animation />
//             </MyChart>
//             <div className='doughnut-values'>
//                 <span>Unassigned 3</span>
//                 <span>In Progress 2</span>
//                 <span>Completed 6</span>
//             </div>
//         </MyCard>
//     );
// }
// export default MoDoughnut;