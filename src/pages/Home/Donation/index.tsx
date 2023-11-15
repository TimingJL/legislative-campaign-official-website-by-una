import * as React from 'react';
import clsx from 'clsx';
import { anchorId } from 'src/config/anchor';
import Button from 'src/components/Button';
import CountUp from 'react-countup';
import bgDonationSrc from 'src/assets/images/bg-donation.png';
import titleDonationSrc from 'src/assets/images/title-donation.svg';
import totalAmountSrc from 'src/assets/images/subtitle-total-amount.svg';
import DollarSrc from 'src/assets/icons/dollar-circle.svg';
import { donationPlans } from './data';
import OptionBox from './OptionBox';
import CustomPrice from './CustomPrice';

const Donation = () => {
  const [tab, setTab] = React.useState(0);
  const [selectedPlan, setSelectedPlan] = React.useState(0);
  return (
    <section
      id={anchorId.donation}
      className="flex justify-center px-[20px] py-[30px] lg:h-[527px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgDonationSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
      }}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container">
        <div className={clsx(
          "bg-white max-w-[660px] w-full p-[30px] lg:py-[60px] lg:px-[30px] rounded-[80px] h-full flex flex-col items-center",
          "py-[20px] px-[25px]"
        )}>
          {tab === 0 && (<>
            <img src={titleDonationSrc} className="lg:h-[60px] h-[35px]" />
            <div className="lg:whitespace-nowrap whitespace-pre-wrap text-center pt-[20px] lg:mt-[10px] mb-[20px] font-bold lg:text-[24px]">
              {'您的小筆捐款，\n是每隻毛孩未來的大大動力！'}
            </div> 
            <img src={totalAmountSrc} className="h-[25px] lg:h-[35px]" />
            <div className="lg:text-[60px] text-[30px] text-primary font-black">
              <span>NT$</span>
              <CountUp
                end={987655873}
                duration={3}
                separator=","
              />
            </div>
            <Button
              className="lg:min-h-[82px] lg:w-[222px] lg:text-[28px] lg:mt-[20px] mt-[10px]"
              startIcon={<img src={DollarSrc} className="lg:w-[40px] lg:h-[40px]" />}
              iconClassName="lg:w-[40px] lg:h-[40px]"
              onClick={() => setTab(1)}
            >
              前往捐款
            </Button>
          </>)}
          {tab === 1 && (<>
            <div>
              <div className="text-center lg:text-[24px] text-[20px] font-bold mb-[10px]">選擇捐款方案</div>
              <div className="grid grid-cols-6 gap-[10px] w-full">
                {donationPlans.map((plan) => (
                  <OptionBox
                    key={plan.id}
                    {...plan}
                    selected={selectedPlan === plan.id}
                    className="grid-rows-1 col-span-3 md:col-span-2"
                    onClick={(value) => setSelectedPlan(value)}
                  />
                ))}
                <CustomPrice id={999} className="grid-rows-1 col-span-3 md:col-span-6 lg:h-[90px]" selected={selectedPlan === 999} onClick={(value) => setSelectedPlan(value)} />
              </div>
              <div className="flex justify-center lg:gap-[20px] gap-[10px] mt-[10px]">
                <Button
                  className="lg:h-[82px] lg:w-[176px] lg:text-[28px]"
                  variant="outlined"
                  onClick={() => setTab(0)}
                >
                  返回
                </Button>
                <Button
                  className="lg:h-[82px] lg:w-[222px] lg:text-[28px]"
                  startIcon={<img src={DollarSrc} className="lg:w-[40px] lg:h-[40px]" />}
                  iconClassName="lg:w-[40px] lg:h-[40px]"
                >
                  我要捐款
                </Button>
              </div>
            </div>
          </>)}
        </div>
      </div>
    </section>
  );
};

export default Donation
