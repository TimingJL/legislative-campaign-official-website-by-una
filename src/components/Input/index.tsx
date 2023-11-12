import { HTMLProps } from 'react';
import clsx from 'clsx';

interface IProps extends HTMLProps<HTMLInputElement> {
  startAdornment?: React.ReactNode | string;
}

const Input = (props: IProps) => {
  const { className, ...otherProps } = props;
  return (
    <input
      className={clsx(
        "px-[12px] py-[10px] h-[50px] rounded-[8px] text-[14px] border-[#B9B9B9]",
        className,
      )}
      {...otherProps}
    />
  );
};

export default Input;
