import clsx from 'clsx';
import { anchorId } from 'src/config/anchor';
import declaration2023Src from 'src/assets/images/declaration2023.svg';
import sloganSrc from 'src/assets/images/slogan.svg';
import sloganMobileSrc from 'src/assets/images/slogan-mobile.svg';
import keepItPossibleSrc from 'src/assets/images/keep-it-possible.svg';
import portraitSrc from 'src/assets/images/portrait.png';
import miaoLiHanEnOutlinedSrc from 'src/assets/images/miao-li-han-en-outlined.svg';
import miaoLiHanEnWrapOutlinedSrc from 'src/assets/images/miao-li-han-en-outlined-wrap.svg';
import miaoLiHanCn from 'src/assets/images/miao-li-han-cn-vertical.svg';

const title = '護航台灣幸福經濟\n從照顧每一隻貓咪開始';
const description = '我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。\n\n因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。'

const Hero = () => {
  return (
    <section
      id={anchorId.hero}
      className="flex justify-center bg-[#E3E3E3] lg:px-[20px] px-[10px] lg:pt-[146px] pt-[30px]"
    >
      <div className="container relative">
        <img src={miaoLiHanCn} className="absolute right-0 top-[-120px] hidden lg:block" />
        <div className="relative">
          <div className="w-full flex justify-center sm:justify-start">
            <img src={declaration2023Src} className="h-[20px] lg:h-[35px]" />
          </div>
          <img src={sloganSrc} className="py-[10px] w-[345px] lg:w-[700px] hidden lg:block" />
          <img src={sloganMobileSrc} className="py-[10px] min-w-[345px] max-w-[700px] w-full lg:hidden" />
          <img src={miaoLiHanEnOutlinedSrc} className="absolute bottom-[-20px] left-[60px] h-[150px] translate-y-[100%] md:block hidden" />
          <img src={miaoLiHanEnWrapOutlinedSrc} className="absolute bottom-0 left-[40px] h-[150px] translate-y-[100%] md:hidden block" />
        </div>
        <div className="flex w-full gap-[10px] lg:items-end">
          <div className="mt-[18px] max-w-[30px] lg:max-w-[56px] relative flex-shrink-0">
            <img src={keepItPossibleSrc} />
          </div>
          <div className="relative mt-[210px] lg:mt-[0px]">
            <div
              className={clsx(
                "bg-white z-10 w-full rounded-tl-[80px] rounded-br-[80px] pt-[10px] pb-[18px] px-[15px] border-primary border-[3px] mb-[10px]",
                "lg:w-full lg:right-[20px] lg:pt-[30px] lg:pb-[40px] lg:px-[40px]",
              )}
              style={{ boxShadow: '#4527A0 -5px 5px 0px 0px' }}
            >
              <img
                className={clsx(
                  "absolute top-0 right-0 min-w-[242px] max-w-[350px] w-[50vw] translate-y-[calc(-100%+1px)]",
                  "lg:w-[500px] lg:max-w-[500px]"
                )}
                src={portraitSrc}
              />
              <div
                className={clsx(
                  "whitespace-pre-line text-center font-bold mb-[10px]",
                  "lg:whitespace-nowrap lg:text-[35px] lg:mb-[30px]"
                )}
              >
                {title}
              </div>
              <div
                className={clsx(
                  "text-[10px] lg:text-[15px] whitespace-pre-line",
                  "lg:text-[25px]"
                )}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
