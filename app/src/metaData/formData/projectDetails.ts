import SkipFooter from "../../components/atomic/SkipFooter/SkipFooter";

export const projectDetailData = {
    "className": "project-details",
    ActionComponent: SkipFooter,
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
            type: "select",
            name: "fund transfer type",
            label: "Fund Transfer Type*",
            placeholder: "Select type of fund transfer",
            className: "box5",
            width: "300px"
        },
        {
            type: "textbox",
            name: "duration",
            label: "Duration*",
            placeholder: "Duration",
            className: "box6",
            width: "300px"
        },
        {
            type: "multiline",
            name: "project scope",
            label: "Project Scope",
            placeholder: "Write scope of project",
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
    ]
}