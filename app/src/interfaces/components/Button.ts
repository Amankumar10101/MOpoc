export interface IButtonInterface {
  variant?: "text" | "outlined" | "contained" | undefined;
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  color?: string | undefined;
  width?: string | undefined;
  top?: any;
  onContinueClick?: () => void;
  onClick?: () => void;
  onBackClick?: () => void;
}
