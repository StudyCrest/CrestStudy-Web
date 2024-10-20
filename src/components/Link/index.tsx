import React, { AnchorHTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "contained" | "outlined";
  size?: "large" | "medium" | "small";
  title: string;
  asButton?: boolean;
  external?: boolean;
  extraStyle?: string;
}

const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      href,
      variant = "contained",
      size = "medium",
      title,
      asButton = false,
      external = false,
      extraStyle,
      ...props
    },
    ref
  ) => {
    const rootClassName = cn(`${s.root}`, `${extraStyle}`, {
      [s.contained]: variant === "contained" && asButton,
      [s.outlined]: variant === "outlined" && asButton,
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
    });

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          {...props}
          className={rootClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      );
    }

    return (
      <a ref={ref} href={href} {...props} className={`${rootClassName}`}>
        {title}
      </a>
    );
  }
);

Link.displayName = "Link";
export default Link;
