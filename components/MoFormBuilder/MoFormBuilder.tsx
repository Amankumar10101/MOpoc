
import MoTextfields from "../MoTextfield/MoTextfields";
import { useEffect, useState } from "react";
import MoButton from "../MoButton/MoButton";
import "./MoFormBuilder.css";
import { FormElements, FormBuilder } from '../../app/interface';
import axios from "axios";
import MoCheckbox from "../MoCheckbox/MoCheckbox";
import MoPassword from "../MoTextfield/MoPassword";
import SkipFooter from "../SkipFooter/SkipFooter";
import MoLink from "../MoLink/MoLink";


function MoFormBuilder({ onBackClick, onContinueClick, className, ActionComponent, formData }: FormBuilder) {

    // console.log(props);
    // const { formData } = props;
    const [errorMsg, setErrorMsg] = useState();
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const handleChange = (name: string, value: string) => {

        console.log(name);
        console.log(value);
        const controlIndex = formData.findIndex((control) => control.name === name);
        console.log(controlIndex);
        if (controlIndex !== -1) {
            formData[controlIndex].value = value;

        }



        // console.log(formData);
        //   let 
    }

    const validateForm = () => {
        // console.log(formData);


        formData.map((e) => {
            console.log("hello");
            if (e.regex) {
                let reg = RegExp(e.regex)
                let value = e.value;
                if (value && (reg.test(value))) {
                    e.showErrorMessage = false;
                    setShowErrorMsg(false);
                } else {
                    e.showErrorMessage = true;
                    setShowErrorMsg(true);
                }
            }
        })
        console.log("formData", formData)
        return formData.filter((control) => control.showErrorMessage).length === 0;
    }
    const handleSubmit = () => {
        console.log("done");
        if (validateForm()) {
            // post data
            console.log(formData[0].value);
            onContinueClick && onContinueClick();
        }
    }

    useEffect(() => {
        console.log('useeffect1', formData);
    }, [showErrorMsg]); // Only re-run the effect if count change



    return (<>
        <form className={className}>
            {formData.map((d: FormElements) => {
                const { className, width, type, name, placeholder, label, showErrorMessage, errorMessage, link } = d;
                switch (type) {
                    case "textbox": return (
                        <MoTextfields
                            width={width}
                            className={className}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            onChange={handleChange}
                            showErrorMessage={showErrorMessage}
                            errorMessage={errorMessage}
                        ></MoTextfields>
                    );
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
                    );
                    case "password": return (
                        <MoPassword
                            className={className}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            onChange={handleChange}
                        />
                    );
                    case "link": return (<MoLink name={name} link={link} />)
                    case "checkbox": return (<MoCheckbox label={label} name={name} onChange={handleChange}></MoCheckbox>);
                    case "button": return (<MoButton variant="contained" width="100%" type={type} name={name} onClick={handleSubmit} />);
                }
            })}


        </form>
        {ActionComponent && <ActionComponent onBackClick={onBackClick} onContinueClick={handleSubmit} />}
    </>
    )

}
export default MoFormBuilder;