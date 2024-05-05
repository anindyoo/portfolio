import { useEffect } from 'react';
import MenuNavLink from '../../components/MenuNavLink/MenuNavLink';

const Home = () => {
  const navLinks = [
    { name: 'about', link: '/about' },
    { name: 'projects', link: '/projects' },
    { name: 'experiences', link: '/eperiences' },
    { name: 'contact', link: '/contact' },
  ];
  const nameBannerStyle = 'mt-[-2.031rem]';

  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <>
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
          flex flex-col -4.063
          text-9xl font-bold tracking-tight"
          >
            <span className={`${nameBannerStyle}`}>muhammad</span>
            <span className={`${nameBannerStyle} italic !font-normal`}>anindyo</span>
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
              {navLinks.map((navlink) => (
                <MenuNavLink
                  key={`menu-navlink-${navlink.link}`}
                  name={navlink.name}
                  link={navlink.link}
                />
              ))}
            </nav>
          </div>
        </div>
      </section>
      <section className="
      PROJECTS-SECTION
      h-screen"
      >
        PROJECTS SECTION
      </section>
      <section className="
      EXPERIENCES-SECTION
      h-screen"
      >
        EXPERIENCES SECTION
      </section>
      <section className="
      ABOUT-SECTION
      h-screen"
      >
        ABOUT SECTION
      </section>
    </>
  );
};

export default Home;
