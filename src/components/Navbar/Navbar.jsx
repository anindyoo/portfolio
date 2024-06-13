import { NavLink } from 'react-router-dom';
import MenuNavLink from '../MenuNavLink/MenuNavLink';

const menuNavlinksClassName = (menu) => `MENU-NAVLINK-${menu}`;

const menuNavlinks = [
  { name: 'about', link: '/about', className: menuNavlinksClassName('ABOUT') },
  { name: 'projects', link: '/projects', className: menuNavlinksClassName('PROJECTS') },
  { name: 'experiences', link: '/experiences', className: menuNavlinksClassName('EXPERIENCES') },
  { name: 'contact', link: '/contact', className: menuNavlinksClassName('CONTACT') },
];

const Navbar = () => (
  <nav className="
    NAVBAR
    fixed z-50
    flex flex-row justify-between
    w-full
    px-7 py-5
    text-2xl tracking-[-0.08em]"
  >
    <span className="NAVBAR-LOGO HEADLINE-TEXT decoration-lightSweetener italic hover:underline">
      <NavLink to="/" className="pr-4">
        anindyo
      </NavLink>
    </span>
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
  </nav>
);
export default Navbar;
