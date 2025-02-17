import React, { ButtonHTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import ButtonSpinner from "../icons/ButtonSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  title: string;
  extraStyle?: string;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "contained",
      size = "large",
      title,
      extraStyle,
      loading,
      ...props
    },
    ref
  ) => {
    const rootClassName = cn(`${s.root}`, `${extraStyle}`, {
      [s.contained]: variant === "contained",
      [s.outlined]: variant === "outlined",
      [s.text]: variant === "text",
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
    });

    return (
      <button ref={ref} {...props} className={`${rootClassName}`}>
        {loading ? (
          <span className="flex justify-center py-0.5">
            <ButtonSpinner />
          </span>
        ) : (
          title
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
