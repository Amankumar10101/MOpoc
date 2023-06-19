'use client'

import MoCard from "../../components/MoCard/MoCard";
import data from "../../data/purchaserDashboard.json";
import formData from "../../data/formBuilderData.json";
import MoTextfields from "../../components/MoTextfield/MoTextfields";
// import "./purchaserDashboard.scss";
import MoFormBuilder from "../../components/MoFormBuilder/MoFormBuilder";
import MoDoughnut from "../../components/MoDoghnut/MoDoughnut";


function PurchaserDashboard() {

    const purchaserData = data.data;
    const pieValues = [2, 6, 3];
    const colors = [
        '#efbf31',
        '#4eab5b',
        '#377b85',
    ];
    const pieLabels = ["In Progress", "Completed", "Unassigned"];

    return (
        <div>
            <MoFormBuilder {...formData} />
          
            <MoDoughnut
                values={pieValues}
                colors={colors}
                labels={pieLabels}
            ></MoDoughnut>
            
            <div className="mo-dashboard-main-section">
                {purchaserData.map((d) => (
                    <MoCard
                        name={d.name}
                        status={d.status}
                        development={d.development}
                        tech={d.tech}
                        description={d.description}
                        funds={d.funds}
                        date={d.date}
                    ></MoCard>
                ))}
            </div>


        </div>
    )


}

export default PurchaserDashboard;