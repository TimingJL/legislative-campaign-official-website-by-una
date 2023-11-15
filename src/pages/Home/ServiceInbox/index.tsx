import * as React from 'react';
import { anchorId } from 'src/config/anchor';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';
import titleServiceInboxSrc from 'src/assets/images/title-service-inbox.svg';
import Modal from 'src/components/Modal';

const ServiceInbox = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <section
        id={anchorId.serviceInbox}
        className="flex justify-center bg-[#E3E3E3] px-[20px] py-[30px] lg:min-h-[522px]"
        data-aos="fade-up"
        data-aos-delay="300"

      >
        <div className="container">
          <div className="flex justify-center lg:flex-row flex-col">
            <div className="flex flex-col align-center lg:w-[679px]">
              <img src={titleServiceInboxSrc} className="h-[35px] lg:h-[60px] mb-[20px]" />
              <div className="flex justify-center">
                <div className="lg:max-w-[479px] max-w-[353px]">
                  <div className="text-center lg:text-[24px] font-bold text-[20px]">您的聲音，我們的行動！</div>
                  <div className="lg:font-bold text-center lg:text-[24px] text-[15px] font-medium mt-[10px]">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</div>
                </div>
              </div>
            </div>
            <div className="lg:w-[555px] flex justify-center mt-[15px] lg:mt-0">
              <form
                className="flex flex-col items-center gap-[20px] lg:w-[361px] w-[333px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                  setOpen(true);
                }}
              >
                <Input required className="w-full" type="text" placeholder="您的姓名" />
                <Input required className="w-full" type="email" placeholder="您的 Email" />
                <Input required className="w-full" type="text" placeholder="您的手機" />
                <Textarea required className="w-full min-h-[100px]" placeholder="您的建言" />
                <Button className="mb-[100px] w-[100%] max-w-[140px] lg:w-[172px]">送出意見</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="感謝您抽出寶貴的時間給予我們寶貴的建議。"
        content="我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。"
      />
    </>
  );
};

export default ServiceInbox
