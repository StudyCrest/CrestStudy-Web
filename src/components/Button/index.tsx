import React, { ButtonHTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  title: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "contained", size = "large", title, ...props }, ref) => {
    const rootClassName = cn(`${s.root}`, {
      [s.contained]: variant === "contained",
      [s.outlined]: variant === "outlined",
      [s.text]: variant === "text",
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
    });

    return (
      <button ref={ref} {...props} className={rootClassName}>
        {title}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
