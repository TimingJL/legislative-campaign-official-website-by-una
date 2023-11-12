import clsx from 'clsx';

interface IProps {
  tag: string;
  title: string;
  items: {
    id: number;
    title: string;
    description: string;
  }[];
  className?: string;
}

const Card = (props: IProps) => {
  const { tag, title, items, className, ...otherProps } = props;
  return (
    <div className={clsx(
        "bg-white w-full rounded-[8px] p-[15px] lg:max-w-[380px] lg:h-[400px]",
        className,
      )}
      {...otherProps}
    >
      <div className="bg-secondary inline px-[10px] py-[5px] rounded-tl-[8px] rounded-br-[8px]">
        {tag}
      </div>
      <div className="text-[#222] py-[10px] lg:text-[24px] text-[20px] font-bold leading-[30px]">
        {title}
      </div>
      <ol>
        {items.map((item) => (
          <li key={item.id} className="text-[#222] text-[15px] leading-[25px] list-decimal ml-[18px]">
            {`${item.title}：${item.description}`}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Card;
