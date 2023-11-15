import clsx from 'clsx';

interface IProps {
  id: number;
  selected: boolean;
  className?: string;
  onClick: (value: number) => void;
}

const CustomPrice = (props: IProps) => {
  const { id, selected, className, onClick } = props;
  return (
    <div
      className={clsx(
        "flex flex-col lg:justify-center justify-start gap-[5px] border-[2px] rounded-[8px] cursor-pointer px-[10px] py-[15px]",
        "lg:py-[15px] lg:px-[20px]",
        selected ? "border-primary" : "border-[#a9a9a9]",
        className
      )}
      onClick={() => onClick(id)}
    >
      <div className="flex items-center lg:flex-row flex-col lg:gap-[10px] gap-[5px]">
        <div className="flex-shrink-0 lg:text-[20px] text-[16px] font-bold">自訂捐款金額</div>
        <input
          type="number"
          placeholder="請輸入捐款金額"
          className="w-full border-[#a9a9a9] border-[1px] p-[10px] box-border rounded-[8px] text-[15px]"
        />
      </div>
    </div>
  );
};

export default CustomPrice;
