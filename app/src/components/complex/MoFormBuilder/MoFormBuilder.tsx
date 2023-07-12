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
  // Ensure all form data has a defined initial value


  const [errorMsg, setErrorMsg] = useState();
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleChange = (name: string|undefined, value: string | boolean) => {
    const controlIndex = formData.findIndex((control) => control.name === name);
    if (controlIndex !== -1) {
      formData[controlIndex].value = value;
    }
  };

  const validateForm = () => {
    formData.map((e) => {
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
    return formData.filter((control) => control.showErrorMessage).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onContinueClick && onContinueClick(formData);
    }
  };

  return (
    <>
      <form className={className}>
        {formData.map((d: IFormElements, index:number) => {
          const {
            className,
            width,
            type,
            name,
            color,
            top,
            id,
            placeholder,
            label,
            showErrorMessage,
            errorMessage,
            link,
            inputType,
          } = d;
          switch (type) {
            case "textbox":
              return (
                <MoTextfields
                  key={index}
                  width={width}
                  id={id}
                  className={className}
                  name={name}
                  label={label}
                  inputType={inputType}
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
                  id={id}
                  inputType={inputType}
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
              return <MoLink key={index} name={name} link={link} />;
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
                  color={color}
                  top={top}
                  width={width ? width : "100%"}
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
