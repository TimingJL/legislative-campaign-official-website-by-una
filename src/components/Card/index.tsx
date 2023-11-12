import clsx from 'clsx';
import dayjs from 'dayjs';
import CardArrowSrc from 'src/assets/Icons/card-arrow.svg';

interface IProps {
  variant: 'vertical' | 'horizontal';
  data: {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    date: string;
  };
}

const Card = (props: IProps) => {
  const { variant, data } = props;
  const { title, description, imgSrc, date } = data;
  const isVertical = variant === 'vertical';
  const isHorizontal = variant === 'horizontal';
  return (
    <div
      className={clsx(
        "rounded-[8px] overflow-hidden",
        isHorizontal && "h-[232px] flex",
        isVertical && "w-[483px] h-full",
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden flex-shrink-0",
          isHorizontal && "w-[276px]",
          isVertical && "h-[325px]",
        )}
      >
        <img
          src={imgSrc}
          className={clsx(
            "object-cover w-full",
          )}
        />
        {isVertical &&  (
          <img
            src={CardArrowSrc}
            className={clsx(
              "absolute left-[50%] translate-x-[-50%] bottom-[-2px]",
            )}
          />
        )}
        {(isVertical && (
          <div className="absolute top-0 right-0 bg-secondary text-white flex flex-col items-center justify-center w-[75px]">
            <div className="text-[36px] font-bold h-[36px]">{dayjs(date).format('DD')}</div>
            <div className="font-bold mt-[10px] mb-[5px]">{dayjs(date).format('MMM').toUpperCase()}.</div>
          </div>
        ))}
      </div>
      <div className="bg-white h-full p-[15px]">
        {isHorizontal && (
          <div className="bg-secondary inline px-[10px] py-[5px] rounded-tl-[8px] rounded-br-[8px] text-white">
            {dayjs(date).format('YYYY.MM.DD')}
          </div>
        )}
        <div
          className={clsx(
            "text-[24px] font-bold pb-[10px]",
            isHorizontal && "pt-[10px]",
          )}
        >
          {title}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Card;
