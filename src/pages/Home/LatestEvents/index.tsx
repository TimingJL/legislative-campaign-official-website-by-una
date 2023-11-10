import { anchorId } from 'src/config/anchor';

const LatestEvents = () => {
  return (
    <section
      id={anchorId.latestEvents}
      className="flex justify-center bg-[#E3E3E3] px-[20px] pt-[30px]"
    >
      <div className="container">
        LatestEvents
      </div>
    </section>
  );
};

export default LatestEvents
