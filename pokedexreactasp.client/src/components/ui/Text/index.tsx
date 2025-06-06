import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { colors, units, textShadow } from "../../utils";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "darker" | "outlined" | "error" | "light";
  size?: "sm" | "md" | "base" | "lg" | "xl";
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

const getStyle = ({ variant = "default", size = "base", as = "p" }: ITextProps) => {
  switch (variant) {
    case "outlined":
      return {
        as,
        color: colors["gray-100"],
        textShadow: textShadow[`bold-${size}`],
        fontSize: units.fontSize[size],
      };
    case "darker":
      return {
        as,
        color: colors["gray-900"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size],
      };
    case "light":
      return {
        as,
        color: colors["gray-100"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size],
      };
    case "error":
      return {
        as,
        color: colors["red-200"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size],
      };
    default:
      return {
        as,
        color: colors["gray-800"],
        textShadow: textShadow[`light-${size}`],
        fontSize: units.fontSize[size],
      };
  }
};

const PixelatedText = styled("p")((props: ITextProps) => getStyle(props));

const Text: React.FC<ITextProps> = ({ children, ...props }) => {
  return <PixelatedText {...props}>{children}</PixelatedText>;
};

export default Text;
