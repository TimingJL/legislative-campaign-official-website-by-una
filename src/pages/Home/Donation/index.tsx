import { anchorId } from 'src/config/anchor';
import Button from 'src/components/Button';
import CountUp from 'react-countup';
import bgDonationSrc from 'src/assets/images/bg-donation.png';
import titleDonationSrc from 'src/assets/images/title-donation.svg';
import totalAmountSrc from 'src/assets/images/subtitle-total-amount.svg';
import DollarSrc from 'src/assets/icons/dollar-circle.svg';

const Donation = () => {
  return (
    <section
      id={anchorId.donation}
      className="flex justify-center px-[20px] py-[30px] lg:h-[527px] h-[435px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgDonationSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
      }}
    >
      <div className="container">
        <div className="bg-white max-w-[660px] w-full p-[30px] py-[60px] lg:py-[30px] rounded-[80px] h-full flex flex-col items-center">
          <img src={titleDonationSrc} className="lg:h-[60px] h-[35px]" />
          <div className="lg:whitespace-nowrap whitespace-pre-wrap text-center pt-[20px] lg:mt-[10px] mb-[20px] font-bold lg:text-[24px]">
            {'您的小筆捐款，\n是每隻毛孩未來的大大動力！'}
          </div> 
          <img src={totalAmountSrc} className="h-[25px] lg:h-[35px]" />
          <div className="lg:text-[60px] text-[30px] text-[#4527A0] font-black">
            <span>NT$</span>
            <CountUp
              end={987655873}
              duration={3}
              separator=","
            />
          </div>
          <Button
            className="lg:h-[82px] lg:w-[222px] lg:text-[28px] lg:mt-[20px] mt-[10px]"
            startIcon={<img src={DollarSrc} className="lg:w-[40px] lg:h-[40px]" />}
            iconClassName="lg:w-[40px] lg:h-[40px]"
          >
            前往捐款
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donation
