import { anchorId } from 'src/config/anchor';
import titleServiceInboxSrc from 'src/assets/images/title-service-inbox.svg';

const ServiceInbox = () => {
  return (
    <section
      id={anchorId.serviceInbox}
      className="flex justify-center bg-[#E3E3E3] px-[20px] py-[30px]"
    >
      <div className="container">
        <div className="flex align-center justify-center">
          <img src={titleServiceInboxSrc} />
        </div>
      </div>
    </section>
  );
};

export default ServiceInbox
