import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconClassName?: string;
  variant?: 'contained' | 'outlined';
}

const Button = (props: IProps) => {
  const { children, startIcon, endIcon, className, iconClassName, variant = "contained", ...otherProps } = props;
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-[10px]",
        "font-bold text-[20px] h-[52px] rounded-[50px] px-[20px]",
        "hover:opacity-80",
        "active:scale-90",
        "transition-all",
        variant === "outlined" && "bg-white border-primary border-[3px] text-primary",
        variant === "contained" && "bg-primary text-white",
        className
      )}
      {...otherProps}
    >
      <div className={clsx(
        `w-[30px] h-[30px] flex-shrink-0`,
        iconClassName,
        !startIcon && "hidden"
      )}>
        {startIcon}
      </div>
      {children}
      <div className={clsx(
        `w-[30px] h-[30px] flex-shrink-0`,
        iconClassName,
        !endIcon && "hidden"
      )}>
        {endIcon}
      </div>
    </button>
  );
};

export default Button;
