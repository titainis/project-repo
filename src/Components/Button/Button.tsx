import React, { PropsWithChildren, ReactNode } from "react";

interface ButtonProps {
    className?: string,
    onClick?: () => void;
    value?: string;
    disabled?: boolean;
    children: ReactNode;
    props?: PropsWithChildren;
}

const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    value,
    disabled,
    children,
    props,
}) => {
    return (
      <button
        className={className}
        onClick={onClick}
        value={value}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
}

export default Button;
