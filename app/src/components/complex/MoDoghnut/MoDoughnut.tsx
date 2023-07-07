import * as React from "react";
import { MyCard } from "../MoCard/MoCard";
import "../../../styles/components/complex/MoDoughnut.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { IDoughnutInterface } from "../../../interfaces/components/Doughnut";

Chart.register(ArcElement, Tooltip, Legend);

function MoDoughnut(props: IDoughnutInterface) {
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
  return (
    <MyCard className="doughnut-card" width="400px">
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <Doughnut
          data={data}
          options={{ cutout: "85%" }}
          width={100}
          height={100}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "50%",
            left: 0,
            textAlign: "center",
            marginTop: "-15px",
            fontSize: "15px",
          }}
        >
          <span>
            11
            <br />
            Total projects
          </span>
        </div>
      </div>
      <div className="doughnut-values">
        {props.labels.map((label, index) => (
          <span
            className="doughnut-label"
            style={{ borderLeft: " 3px solid " + props.colors[index] }}
          >
            {label} {props.values[index]}
          </span>
        ))}
      </div>
    </MyCard>
  );
}
export default MoDoughnut;
