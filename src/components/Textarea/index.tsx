import { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  startAdornment?: React.ReactNode | string;
}

const Textarea = (props: IProps) => {
  const { className, ...otherProps } = props;
  return (
    <textarea
      className={clsx(
        "px-[12px] py-[10px] h-[30px] rounded-[8px] text-[14px] border-[#B9B9B9]",
        className,
      )}
      {...otherProps}
    />
  );
};

export default Textarea;
