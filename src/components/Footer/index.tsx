import { anchorId } from 'src/config/anchor';
import logoWhiteSrc from 'src/assets/images/logo-white.svg';
import bottomCatSrc from 'src/assets/images/bottom-cat.png';

const Footer = () => {
  return (
    <section
      className="flex justify-center bg-primary text-white px-[20px] pt-[30px] pb-[15px] overflow-visible"
    >
      <div className="container">
        <div className="relative h-[2px]">
          <img src={bottomCatSrc} className="absolute top-0 lg:left-[84px] left-[50%] translate-x-[-50%] lg:translate-x-[0%] translate-y-[calc(-100%+30px)]" />
        </div>
        <div className="flex justify-between">
          <div className="logo hidden lg:block">
            <img src={logoWhiteSrc} />
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
            <div className="menu w-[215px]">
              <div className="label text-[#FFB300] text-[13px] text-center mb-[10px]">Menu</div>
              <div className="flex text-[15px] font-medium">
                <ul className="flex flex-col items-center">
                  <li><a href={`#${anchorId.hero}`}>首頁</a></li>
                  <li><a href={`#${anchorId.latestEvents}`}>最新活動</a></li>
                  <li><a href={`#${anchorId.serviceInbox}`}>民眾服務信箱</a></li>
                </ul>
                <ul className="flex flex-col items-center ml-[50px]">
                  <li><a href={`#${anchorId.advocate}`}>候選人主張</a></li>
                  <li><a href={`#${anchorId.policyIssues}`}>政策議題</a></li>
                  <li><a href={`#${anchorId.donation}`}>小額捐款</a></li>
                </ul>
              </div>
            </div>
            <div className="info mt-[60px] lg:ml-[60px] lg:mt-0">
              <div className="label text-[#FFB300] text-[13px] text-center mb-[10px]">Office information</div>
              <div className="text-left text-[15px] font-medium">
                <div>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</div>
                <div>電話：(02) 888-5678 </div>
                <div>郵件：meowoffice@linmeow.tw</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[#999] mt-[20px] text-[13px]">
          版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。
        </div>
      </div>
    </section>
  );
};

export default Footer
