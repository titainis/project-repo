import React, { ReactNode } from "react";

interface ButtonProps {
    className: string,
    onClick?: () => void;
    value?: string;
    disabled?: boolean;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    value,
    disabled,
    children,
}) => {
    return (
      <button
        className={className}
        onClick={onClick}
        value={value}
        disabled={disabled}
      >
        {children}
      </button>
    );
}

export default Button;
