import MoTextfields from "../../atomic/MoTextfield/MoTextfields";
import { useEffect, useState } from "react";
import MoButton from "../../atomic/MoButton/MoButton";
import "../../../styles/components/complex/MoFormBuilder.scss";
import DatePickerValue from "../../atomic/MoDatePicker/MoDatePicker";
import { IFormBuilder } from "@/app/src/interfaces/components/FormBuilder/FormBuilder";
import { IFormElements } from "@/app/src/interfaces/components/FormBuilder/FormElements";

function MoMilestones({
  onBackClick,
  onContinueClick,
  className,
  ActionComponent,
  formData,
}: IFormBuilder) {
  // Ensure all form data has a defined initial value


  const [errorMsg, setErrorMsg] = useState();
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  const handleChange = (name: string | undefined, value: string | boolean) => {
    const controlIndex = formData.findIndex((control) => control.name === name);
    if (controlIndex !== -1) {
      formData[controlIndex].value = value;
    }
  };

  const validateForm = () => {
    formData.map((e) => {
      if (e.required) {
        if (e.value == undefined) {
          e.showRequiredMessage = true;
          setShowRequiredMessage(true);
        } else {
          e.showRequiredMessage = false;
          setShowRequiredMessage(false);
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
        }
      }
      else if (e.regex) {
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
        {formData.map((d: IFormElements, index: number) => {
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
            required,
            showRequiredMessage,
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
                  required={required}
                  showErrorMessage={showErrorMessage}
                  errorMessage={errorMessage}
                  showRequiredMessage={showRequiredMessage}
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
            case "date":
              return (
                <DatePickerValue
                  key={index}
                  width={width}
                  id={id}
                  className={className}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
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

export default MoMilestones;
