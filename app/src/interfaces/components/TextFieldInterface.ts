export interface ITextfieldInterface {
  width?: string,
  label?: string,
  placeholder?: string,
  name?: string,
  rows?: number,
  id?: string,
  required?:boolean,
  inputType?: string,
  multiline?: boolean,
  showErrorMessage?: boolean,
  errorMessage?: string,
  showRequiredMessage?:boolean
  className?: string,
  type?: string,
  onChange?: (name: string, value: string) => void,
}
