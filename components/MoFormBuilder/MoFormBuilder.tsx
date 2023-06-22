import MoTextfields from "../MoTextfield/MoTextfields";
import MoButton from "../MoButton/MoButton";
import "./MoFormBuilder.css";
import { FormElements, FormBuilder } from '../../app/interface';
import axios from "axios";


function MoFormBuilder({ className, formData }: FormBuilder) {

    // console.log(props);
    // const { formData } = props;


    const handleChange = (name: string, value: string) => {
        console.log(name);
        console.log(value);
        const controlIndex = formData.findIndex((control) => control.name === name);
        console.log(controlIndex);
        if (controlIndex !== -1) {
            formData[controlIndex].value = value;
        }
        console.log(formData);
        //   let 
    }
    // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(event.target);
    //     const data = new FormData(event.target);
    //     console.log(data.get('title'));
    //     console.log(data.get('suggestion'));
    //     console.log(data);
    //     {formData.map((d: Partial<FormElements>) => {
    //         const { name } = d;

    //     })}
    //     try {
    //         // 👇️ const data: CreateUserResponse
    //         axios.post(
    //             'http://localhost:8080/user',
    //             data,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Accept: 'application/json',
    //                 },
    //             },
    //         ).then((response) => {
    //             console.log(response);
    //         }).catch(error => {
    //             console.log(error.response);


    //         });
    //     } catch (error) {
    //         
    //     }
    // }

    return (
        <form className={className}
        // onSubmit={handleSubmit}
        >
            {formData.map((d: Partial<FormElements>) => {
                const { className,width, type, name, placeholder, label } = d;
                switch (type) {
                    case "textbox": return (
                        <MoTextfields
                        width={width}
                            className={className}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            onChange={handleChange}
                        ></MoTextfields>
                    ); break;
                    case "multiline": return (
                        <MoTextfields
                        width={width}
                            className={className}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            multiline
                            rows={d.rows}
                            onChange={handleChange}
                        />
                    ); break;
                    case "button": return (<MoButton variant="contained" type={type} name={name} />); break;
                }
            })}
        </form>
    )





}
export default MoFormBuilder;