import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = (props: IProps) => {
  const { children, startIcon, endIcon, className, ...otherProps } = props;
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-[10px]",
        "bg-primary text-white font-bold text-[20px] h-[52px] rounded-[50px] px-[20px]",
        "hover:opacity-80",
        "active:scale-90",
        "transition-all",
        className
      )}
      {...otherProps}
    >
      <div className={clsx(
        "w-[30px] h-[30px] flex-shrink-0",
        !startIcon && "hidden"
      )}>
        {startIcon}
      </div>
      {children}
      <div className={clsx(
        "w-[30px] h-[30px] flex-shrink-0",
        !endIcon && "hidden"
      )}>
        {endIcon}
      </div>
    </button>
  );
};

export default Button;
