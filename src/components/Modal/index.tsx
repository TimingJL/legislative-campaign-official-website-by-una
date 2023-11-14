import React from "react";
import clsx from "clsx";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  onClose?: () => void;
}

const Modal = (props: IProps) => {
  const { open, title, content, onClose } = props;

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <dialog
      open={open}
      className={clsx(
        "fixed w-full h-full top-0 z-50 bg-[rgba(0,0,0,0.5)] transition-all",
      )}
    >
      <div
        className={clsx(
          "absolute bg-white z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all",
          "w-[350px] h-[328px] p-[30px] rounded-[80px]",
        )}
      >
        <div className="text-center text-[20px] font-bold">{title}</div>
        <div className="mt-[10px] text-[15px] font-medium text-center">{content}</div>
        <div className="flex items-center justify-center mt-[50px]">
          <button
            className="border-primary border-[3px] rounded-[50px] text-primary text-[20px] font-medium w-[100px] h-[60px] hover:opacity-80 active:scale-90 transition-all"
            onClick={onClose}
          >
            返回
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
