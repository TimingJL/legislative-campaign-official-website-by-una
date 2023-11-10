import { anchorId } from 'src/config/anchor';
import logoWhiteSrc from 'src/assets/images/logo-white.svg';

const Footer = () => {
  return (
    <section
      className="flex justify-center bg-primary text-white px-[20px] pt-[30px] pb-[15px]"
    >
      <div className="container">
        <div className="flex justify-between">
          <div className="logo">
            <img src={logoWhiteSrc} />
          </div>
          <div className="flex">
            <div className="menu w-[215px]">
              <div className="label text-[#FFB300] text-center mb-[10px]">Menu</div>
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
            <div className="info ml-[60px]">
              <div className="label text-[#FFB300] text-center mb-[10px]">Office information</div>
            </div>
          </div>
        </div>
        <div className="text-center text-[#999] mt-[20px]">
          版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。
        </div>
      </div>
    </section>
  );
};

export default Footer
