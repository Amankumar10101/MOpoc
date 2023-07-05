
'use client'

import MoCard from "../src/components/complex/MoCard/MoCard";
import data from "../../app/src/metaData/formData/purchaserDashboard.json";
import Wallet from "../signUp/wallet/wallet";
import { Div } from "@/app/src/components/atomic/MoMolecules/Molecules";


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
            <Wallet />
            <Div className="hello">helllo</Div>
            {/* <MoFormBuilder {...formData} /> */}
          
            {/* <MoDoughnut
                values={pieValues}
                colors={colors}
                labels={pieLabels}
            ></MoDoughnut> */}
            
            {/* <div className="mo-dashboard-main-section">
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
            </div> */}



      </div>
    )


}

export default PurchaserDashboard;