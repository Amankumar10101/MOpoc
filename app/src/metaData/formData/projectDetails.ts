import SkipFooter from "../../components/atomic/SkipFooter/SkipFooter";

export const projectDetailData = {
    "className": "project-details",
    // ActionComponent: SkipFooter,
    "formData": [
        {
            type: "textbox",
            name: "title",
            label: "Title*",
            placeholder: "Your Project title",
            className: "box1",
            width: "300px"
        },
        {
            type: "select",
            name: "category",
            label: "Category*",
            placeholder: "Enter Category",
            className: "box2",
            width: "300px"
        },
        {
            type: "textbox",
            name: "project fund",
            label: "Total Project Fund*",
            placeholder: "Enter Total Project Fund",
            className: "box3",
            width: "300px"
        },
        {
            type: "textbox",
            name: "penalty",
            label: "Penalty(in Percent)*",
            placeholder: "Penalty",
            className: "box4",
            width: "300px"
        },
        {
            type: "textbox",
            name: "duration",
            label: "Duration*",
            placeholder: "Duration",
            className: "box5",
            width: "300px"
        },
        {
            type: "textbox",
            name: "fund transfer type",
            label: "Fund Transfer Type",
            placeholder: "Fund Transfer Type",
            className: "box6",
            width: "300px"
        },
        {
            type: "textbox",
            name: "Royalties",
            label: "Royalties",
            placeholder: "Royalties",
            className: "box7",
            width: "300px"
        },
        
        {
            type: "multiline",
            name: "Terms & Conditons",
            label: "Terms & Conditons",
            placeholder: "Terms & Conditons",
            className: "large1",
            rows:4,
            width: "300px",
        },
        {
            type: "multiline",
            name: "deliverables",
            label: "Deliverables",
            placeholder: "Your deliverables",
            className: "large2",
            rows:4,
            width: "300px",
        },
        {
            type: "multiline",
            name: "project scope",
            label: "Project Scope",
            placeholder: "Project Scope",
            className: "large3",
            rows:4,
            width: "300px",
        },
        {
            type: "multiline",
            name: "Requirement",
            label: "Requirement",
            placeholder: "Requirement",
            className: "large4",
            rows:4,
            width: "300px",
        },
    ]
}