import { anchorId } from 'src/config/anchor';
import titleLatestEventsSrc from 'src/assets/images/title-latest-events.svg';
import NormalLayout from './NormalLayout';
import SwiperLayout from './SwiperLayout';


const LatestEvents = () => {
  return (
    <section
      id={anchorId.latestEvents}
      className="flex justify-center bg-[#E3E3E3] py-[30px]"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="500"
    >
      <div className="container">
        <div className="flex align-center justify-center mb-[30px]">
          <img src={titleLatestEventsSrc} className="h-[35px] lg:h-[60px]" />
        </div>
        <NormalLayout />
        <SwiperLayout />
      </div>
    </section>
  );
};

export default LatestEvents
