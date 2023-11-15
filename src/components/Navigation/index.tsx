import * as React from 'react';
import clsx from 'clsx';
import Button from 'src/components/Button';
import { anchorId } from 'src/config/anchor';
import LogoSrc from 'src/assets/images/logo.svg';
import LogoWhiteSrc from 'src/assets/images/logo-white.svg';
import CloseWhiteSrc from 'src/assets/images/close-white.svg';
import MenuSrc from 'src/assets/images/menu.svg';
import DollarSrc from 'src/assets/icons/dollar-circle.svg';
import DollarPrimarySrc from 'src/assets/icons/dollar-circle-primary.svg';
import { scrollIntoViewWithOffset } from 'src/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          "flex items-center justify-center h-[65px] bg-white shadow-sm px-[20px] sticky top-0 z-50",
          "lg:h-[100px]"
        )}
        style={{ borderTop: "4px solid #4527A0" }}
      >
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
              <li className="hover:opacity-80 active:scale-90 cursor-pointer transition-all" onClick={() => scrollIntoViewWithOffset(document.getElementById(anchorId.advocate), 300)}>
                候選人主張
              </li>
              <li className="hover:opacity-80 active:scale-90 cursor-pointer transition-all" onClick={() => scrollIntoViewWithOffset(document.getElementById(anchorId.latestEvents), 100)}>
                最新活動
              </li>
              <li className="hover:opacity-80 active:scale-90 cursor-pointer transition-all" onClick={() => scrollIntoViewWithOffset(document.getElementById(anchorId.policyIssues), 100)}>
                政策議題
              </li>
              <li className="hover:opacity-80 active:scale-90 cursor-pointer transition-all" onClick={() => scrollIntoViewWithOffset(document.getElementById(anchorId.serviceInbox), 100)}>
                民眾服務信箱
              </li>
            </ul>
            <Button
              startIcon={<img src={DollarSrc} />}
              onClick={() => {
                const donationElement = document.getElementById(anchorId.donation);
                scrollIntoViewWithOffset(donationElement, 100);
              }}
            >
              小額捐款
            </Button>
          </div>
          <img
            alt="menu"
            src={MenuSrc}
            className="lg:hidden cursor-pointer hover:opacity-80 active:scale-90 transition-all"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>
      <nav
        className={clsx(
          "fixed top-0 right-0 w-full h-full bg-primary z-50 px-[20px] transition-all",
          isMenuOpen && "translate-x-[0%] opacity-100",
          !isMenuOpen && "translate-x-[100%] opacity-0",
        )}
      >
        <div>
          <div className="flex items-center justify-between h-[65px]">
            <a href={`#${anchorId.hero}`}>
              <img
                alt="Logo"
                src={LogoWhiteSrc}
                className={clsx(
                  "logo hover:opacity-80 active:scale-90 transition-all cursor-pointer w-[150px]",
                  "lg:w-[235px]"
                )}
              />
            </a>
            <img
              src={CloseWhiteSrc}
              className={clsx(
                "logo hover:opacity-80 active:scale-90 transition-all cursor-pointer",
              )}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          {isMenuOpen && <div className="mt-[10px]">
            <ul className="flex flex-col items-end gap-[30px] text-[20px] font-bold text-[white]">
              <li
                className="hover:opacity-80 active:scale-90 cursor-pointer transition-all"
                onClick={() => {
                  scrollIntoViewWithOffset(document.getElementById(anchorId.advocate), 300);
                  setIsMenuOpen(false);
                }}
                data-aos="fade-up" data-aos-delay="100"
              >
                候選人主張
              </li>
              <li
                className="hover:opacity-80 active:scale-90 cursor-pointer transition-all"
                onClick={() => {
                  scrollIntoViewWithOffset(document.getElementById(anchorId.latestEvents), 60);
                  setIsMenuOpen(false);
                }}
                data-aos="fade-up" data-aos-delay="200"
              >
                最新活動
              </li>
              <li
                className="hover:opacity-80 active:scale-90 cursor-pointer transition-all"
                onClick={() => {
                  scrollIntoViewWithOffset(document.getElementById(anchorId.policyIssues), 60);
                  setIsMenuOpen(false);
                }}
                data-aos="fade-up" data-aos-delay="300"
              >
                政策議題
              </li>
              <li
                className="hover:opacity-80 active:scale-90 cursor-pointer transition-all"
                onClick={() => {
                  scrollIntoViewWithOffset(document.getElementById(anchorId.serviceInbox), 60);
                  setIsMenuOpen(false);
                }}
                data-aos="fade-up" data-aos-delay="400"
              >
                民眾服務信箱
              </li>
              <li>
                <Button
                  startIcon={<img src={DollarPrimarySrc} />}
                  style={{ background: 'white', color: '#4527a0' }}
                  onClick={() => {
                    scrollIntoViewWithOffset(document.getElementById(anchorId.donation), 60);
                    setIsMenuOpen(false);
                  }}
                  data-aos="fade-up" data-aos-delay="500"
                >
                  小額捐款
                </Button>
              </li>
            </ul>
          </div>}
        </div>
      </nav>
    </>
  );
};

export default Navigation
