import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: any;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
  buttonType?: "outline gradiant" | "normal" | "primary gradiant";
  loading? : boolean
}
