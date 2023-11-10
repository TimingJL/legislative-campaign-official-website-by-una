import clsx from 'clsx';
import Button from 'src/components/Button';
import { anchorId } from 'src/config/anchor';
import LogoSrc from 'src/assets/images/logo.svg';
import MenuSrc from 'src/assets/images/menu.svg';
import DollarSrc from 'src/assets/icons/dollar-circle.svg';

const Navigation = () => {
  return (
    <nav className={clsx(
      "flex items-center justify-center h-[65px] bg-white shadow-sm px-[20px]",
      "lg:h-[100px]"
    )}>
      <div className="container flex items-center justify-between">
        <a href={`#${anchorId.hero}`}>
          <img
            alt="Logo"
            src={LogoSrc}
            className={clsx(
              "logo hover:opacity-80 active:scale-90 transition-all cursor-pointer w-[150px]",
              "lg:w-[235px]"
            )}
          />
        </a>
        <div className={clsx(
          "hidden items-center gap-[50px]",
          "lg:flex"
        )}>
          <ul className="flex gap-[50px] text-[20px] font-bold">
            <li className="hover:opacity-80 active:scale-90 transition-all"><a href={`#${anchorId.advocate}`}>候選人主張</a></li>
            <li className="hover:opacity-80 active:scale-90 transition-all"><a href={`#${anchorId.latestEvents}`}>最新活動</a></li>
            <li className="hover:opacity-80 active:scale-90 transition-all"><a href={`#${anchorId.policyIssues}`}>政策議題</a></li>
            <li className="hover:opacity-80 active:scale-90 transition-all"><a href={`#${anchorId.serviceInbox}`}>民眾服務信箱</a></li>
          </ul>
          <Button startIcon={<img src={DollarSrc} />}>
            小額捐款
          </Button>
        </div>
        <img alt="menu" src={MenuSrc} className="lg:hidden cursor-pointer hover:opacity-80 active:scale-90 transition-all" />
      </div>
    </nav>
  );
};

export default Navigation
