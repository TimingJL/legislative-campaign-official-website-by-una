import { anchorId } from 'src/config/anchor';
import titleLatestEventsSrc from 'src/assets/images/title-latest-events.svg';

const LatestEvents = () => {
  return (
    <section
      id={anchorId.latestEvents}
      className="flex justify-center bg-[#E3E3E3] px-[20px] py-[30px]"
    >
      <div className="container">
        <div className="flex align-center justify-center">
          <img src={titleLatestEventsSrc} className="h-[35px] lg:h-[60px]" />
        </div>
      </div>
    </section>
  );
};

export default LatestEvents
