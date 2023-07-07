"use client";
import MoTextfields from "../../atomic/MoTextfield/MoTextfields";
import { useEffect, useState } from "react";
import MoButton from "../../atomic/MoButton/MoButton";
import "../../../styles/components/complex/MoFormBuilder.scss";
import MoCheckbox from "../../atomic/MoCheckbox/MoCheckbox";
import MoPassword from "../../atomic/MoTextfield/MoPassword";
import MoDropdown from "../../atomic/MoDropdown/MoDropdown";
import MoLink from "../../atomic/MoLink/MoLink";
import MoAddMoreLink from "../../atomic/MoAddMoreLink/MoAddMoreLink";
import { IFormBuilder } from "@/app/src/interfaces/components/FormBuilder/FormBuilder";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";

function MoFormBuilder({
  onBackClick,
  onContinueClick,
  className,
  ActionComponent,
  formData,
}: IFormBuilder) {
  // console.log(props);
  // const { formData } = props;
  const [errorMsg, setErrorMsg] = useState();
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleChange = (name: string|undefined, value: string | boolean) => {
    const controlIndex = formData.findIndex((control) => control.name === name);
    console.log(controlIndex);
    if (controlIndex !== -1) {
      formData[controlIndex].value = value;
    }
  };

  const validateForm = () => {
    formData.map((e) => {
      console.log("hello");
      if (e.regex) {
        let reg = RegExp(e.regex);
        let value: any = e.value;
        if (value && reg.test(value)) {
          e.showErrorMessage = false;
          setShowErrorMsg(false);
        } else {
          e.showErrorMessage = true;
          setShowErrorMsg(true);
        }
      }
    });
    console.log("formData", formData);
    return formData.filter((control) => control.showErrorMessage).length === 0;
  };
  const handleSubmit = () => {
    console.log("done");
    if (validateForm()) {
      // post data
      console.log(formData[0].value);
      onContinueClick && onContinueClick(formData);
    }
  };

  useEffect(() => {
    console.log("useeffect1", formData);
  }, [showErrorMsg]); // Only re-run the effect if count change

  return (
    <>
      <form className={className}>
        {formData.map((d: IFormElements, index:number) => {
          const {
            className,
            width,
            type,
            name,
            placeholder,
            label,
            showErrorMessage,
            errorMessage,
            link,
          } = d;
          switch (type) {
            case "textbox":
              return (
                <MoTextfields
                  key={index}
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
            case "multiline":
              return (
                <MoTextfields
                  key={index}
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
            case "password":
              return (
                <MoPassword
                  key={index}
                  className={className}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              );
            case "select":
              return (
                <MoDropdown
                  key={index}
                  width={width}
                  className={className}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              );
            case "link":
              return <MoLink name={name} link={link} />;
            case "addMore":
              return (
                <MoAddMoreLink
                  key={index}
                  className={className}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  onChange={handleChange}
                  showErrorMessage={showErrorMessage}
                  errorMessage={errorMessage}
                />
              );
            case "checkbox":
              return (
                <MoCheckbox
                  key={index}
                  label={label}
                  name={name}
                  onChange={handleChange}
                ></MoCheckbox>
              );
            case "button":
              return (
                <MoButton
                  variant="contained"
                  key={index}
                  width={width?width:"100%"}
                  type={type}
                  name={name}
                  onClick={handleSubmit}
                />
              );
          }
        })}
      </form>
      {ActionComponent && (
        <ActionComponent
          onBackClick={onBackClick}
          onContinueClick={handleSubmit}
        />
      )}

    </>
  );
}
export default MoFormBuilder;
