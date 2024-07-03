import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuNavLink from '../MenuNavLink/MenuNavLink';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const menuNavlinksClassName = (menu) => `MENU-NAVLINK-${menu}`;

const menuNavlinks = [
  { name: 'about', link: '/about', className: menuNavlinksClassName('ABOUT') },
  { name: 'projects', link: '/projects', className: menuNavlinksClassName('PROJECTS') },
  { name: 'experiences', link: '/experiences', className: menuNavlinksClassName('EXPERIENCES') },
  { name: 'contact', link: '/contact', className: menuNavlinksClassName('CONTACT') },
];

const Navbar = (props) => {
  const {
    noLogo,
    navbarMobileOnly,
  } = props;

  const [menuToggle, setMenuToggle] = useState(false);

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const laptopBreakpoint = config.screenBreakpoints.laptop;

  const handleMenuTogglerClick = () => setMenuToggle(!menuToggle);

  return (
    <nav className="
    NAVBAR
    fixed z-[70]
    flex flex-row justify-between
    w-full max-w-[125rem]
    px-7 py-5
    text-2xl tracking-[-0.08em]
    pointer-events-auto"
    >
      <span className="NAVBAR-LOGO HEADLINE-TEXT decoration-lightSweetener italic hover:underline">
        {!noLogo && (
          <NavLink to="/" className="pr-4">
            anindyo
          </NavLink>
        )}
      </span>
      {(screenWidth >= laptopBreakpoint) ? (
        !navbarMobileOnly
        && (
        <span className="
        NAVBAR-LINKS
        flex flex-row gap-7"
        >
          {menuNavlinks.map((navlink) => (
            <MenuNavLink
              className={navlink.className}
              key={`menu-navlink-${navlink.link}`}
              name={navlink.name}
              link={navlink.link}
            />
          ))}
        </span>
        )
      ) : (
        <>
          <button
            type="button"
            onClick={handleMenuTogglerClick}
            className="MOBILE-MENU-TOGGLER fill-sunglowMuted"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {menuToggle && (
            <div className="
            MOBILE-MENU
            absolute z-[70] top-0 left-0
            flex flex-col justify-center items-center
            w-screen h-screen
            bg-warmMoss opacity-90"
            >
              <span className="
              MENU-MOBILE-LINKS
              flex flex-col gap-7 items-center"
              >
                <span className="NAVBAR-LOGO HEADLINE-TEXT decoration-lightSweetener italic hover:underline text-6xl">
                  <NavLink
                    to="/"
                    onClick={handleMenuTogglerClick}
                  >
                    anindyo
                  </NavLink>
                </span>
                {menuNavlinks.map((navlink) => (
                  <MenuNavLink
                    className={navlink.className}
                    key={`menu-navlink-${navlink.link}`}
                    name={navlink.name}
                    link={navlink.link}
                    handleMenuTogglerClick={handleMenuTogglerClick}
                    mobile
                  />
                ))}
                <button
                  type="button"
                  onClick={handleMenuTogglerClick}
                  className="MOBILE-MENU-TOGGLER-CLOSE fill-sunglowMuted"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
