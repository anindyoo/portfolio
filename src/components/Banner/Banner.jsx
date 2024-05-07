import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import MenuNavLink from '../MenuNavLink/MenuNavLink';

const menuNavlinksClassName = (menu) => `MENU-NAVLINK-${menu}`;

const menuNavlinks = [
  { name: 'about', link: '/about', className: menuNavlinksClassName('ABOUT') },
  { name: 'projects', link: '/projects', className: menuNavlinksClassName('PROJECTS') },
  { name: 'experiences', link: '/experiences', className: menuNavlinksClassName('EXPERIENCES') },
  { name: 'contact', link: '/contact', className: menuNavlinksClassName('CONTACT') },
];

const menuNavlinkTrigger = (menuName, menuIndex) => {
  const element = document.querySelector(`.${menuName}`);
  const trigger = ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: document.documentElement.scrollHeight,
    pin: true,
    scrub: true,
    pinSpacing: false,
    onUpdate: (self) => {
      const { progress } = self;
      const screenWidth = window.innerWidth;
      const screenHeigth = window.innerHeight;

      const scrollingFactor = screenHeigth / element.clientHeight;
      const adjustedProgress = Math.min(progress * scrollingFactor, 1);
      const targetFontSize = gsap.utils.interpolate(48, 24, adjustedProgress);

      const borderOffside = 16;
      const gap = 28;
      const totalGap = (menuNavlinks.length - menuIndex) * gap;
      const otherMenusOffside = menuNavlinks.reduce((acc, menu, index) => (
        index >= menuIndex
          ? acc + document.querySelector(`.${menu.className}`).clientWidth
          : acc
      ), 0);
      const leftOffside = screenWidth - otherMenusOffside - borderOffside - totalGap;

      gsap.to(element, {
        top: 20,
        height: 'fit-content',
        width: 'fit-content',
        left: progress > 0 && leftOffside,
        letterSpacing: '-0.08rem',
        fontSize: progress === 0 ? '48px' : `${targetFontSize}px`,
        duration: 0,
      });
    },
  });

  return trigger;
};

const Banner = () => {
  const nameBannerStyle = 'mt-[-2.031rem]';

  useEffect(() => {
    const triggers = [];
    menuNavlinks.forEach((menu, index) => {
      const { className } = menu
      const trigger = menuNavlinkTrigger(className, index);
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    }
  });

  return (
    <section className="
      BANNER-SECTION
      h-screen
      flex items-center"
    >
      <div className="
      BANNER-SECTION-CONTAINER
      flex w-full flex-row justify-between"
      >

        <div className="
        NAME-BANNER
        flex flex-col
        text-9xl font-bold tracking-tight"
        >
          <span className={`out ${nameBannerStyle}`}>muhammad</span>
          <span className={`NAME-BANNER-LOGO text-9xl ${nameBannerStyle} italic !font-normal`}>anindyo</span>
          <span className={nameBannerStyle}>poetra</span>
          <span className={nameBannerStyle}>mufatyta</span>
        </div>
        <div className="
        MENU-BANNER
        flex"
        >
          <nav className="
          NAV-MENU-CONTAINER
          flex flex-col items-end justify-between
          text-5xl tracking-tight"
          >
            {menuNavlinks.map((navlink) => (
              <MenuNavLink
                className={navlink.className}
                key={`menu-navlink-${navlink.link}`}
                name={navlink.name}
                link={navlink.link}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
