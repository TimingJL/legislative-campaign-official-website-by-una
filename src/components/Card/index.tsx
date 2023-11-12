import clsx from 'clsx';
import dayjs from 'dayjs';
import CardArrowSrc from 'src/assets/Icons/card-arrow.svg';

interface IProps {
  variant: 'vertical' | 'horizontal';
  verticalClass?: string;
  verticalImgClass?: string;
  data: {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    date: string;
  };
}

const Card = (props: IProps) => {
  const { variant, verticalClass, verticalImgClass, data } = props;
  const { title, description, imgSrc, date } = data;
  const isVertical = variant === 'vertical';
  const isHorizontal = variant === 'horizontal';
  return (
    <div
      className={clsx(
        "rounded-[8px] overflow-hidden",
        isHorizontal && "h-[232px] flex",
        isVertical && `w-[483px] h-full`,
        isVertical && verticalClass
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden flex-shrink-0",
          isHorizontal && "w-[276px]",
          isVertical && verticalImgClass || "max-h-[325px]",
          "overflow-hidden h-auto [&>img]:hover:scale-105"
        )}
      >
        <img
          src={imgSrc}
          className={clsx(
            "object-cover w-full transition-all",
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
          <div className="absolute top-0 right-0 bg-secondary text-white flex flex-col items-center justify-center lg:w-[75px] w-[65px]">
            <div className="lg:text-[36px] text-[30px] font-bold h-[36px]">{dayjs(date).format('DD')}</div>
            <div className="font-bold lg:mt-[10px] mb-[5px]">{dayjs(date).format('MMM').toUpperCase()}.</div>
          </div>
        ))}
      </div>
      <div className="bg-white h-full min-h-[168px] p-[15px]">
        {isHorizontal && (
          <div className="bg-secondary inline px-[10px] py-[5px] rounded-tl-[8px] rounded-br-[8px] text-white">
            {dayjs(date).format('YYYY.MM.DD')}
          </div>
        )}
        <div
          className={clsx(
            "text-[20px]",
            "lg:text-[24px] font-bold pb-[10px]",
            isHorizontal && "pt-[10px]",
          )}
        >
          {title}
        </div>
        <div className="font-medium text-[15px] three-lines">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
