import clsx from 'clsx';

interface IProps {
  id: number;
  title: string;
  price: number;
  headcount: number;
  selected: boolean;
  className?: string;
  onClick: (value: number) => void;
}

const OptionBox = ({ id, title, price, headcount, selected, className, onClick }: IProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center lg:justify-center justify-start gap-[5px] border-[2px] rounded-[8px] py-[15px] px-[20px] cursor-pointer",
        selected ? "border-primary" : "border-[#a9a9a9]",
        className
      )}
      onClick={() => onClick(id)}
    >
      <div className="lg:text-[20px] text-[16px] font-bold">{title}</div>
      <div className="text-[20px] font-black text-primary">NT${price.toLocaleString()}</div>
      <div className="text-[13px] text-[#999] whitespace-nowrap">{`已有 ${headcount} 人贊助`}</div>
    </div>
  );
};

export default OptionBox;
