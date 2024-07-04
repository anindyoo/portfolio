import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuNavLink = (props) => {
  const {
    className,
    name,
    link,
    handleMenuTogglerClick,
    mobile,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const hoveredStyle = 'italic font-bold text-orangePith text-stroke stroke-cyan-700';
  const loopSize = 5;

  const onMouseEnterHandler = () => setIsHovered(true);
  const onMouseLeaveHandler = () => setIsHovered(false);

  const menuClickHandler = () => handleMenuTogglerClick(false);

  return (
    <NavLink
      to={link}
      title={name}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={mobile && menuClickHandler}
      className={`
      ${className} 
      NAVLINK-CONTAINER
      flex flex-col items-end w-fit`}
    >
      <span className={`
      NAVLINK-TEXT-CONTAINER
      relative
      transition-all duration-100`}
      >
        <span className={`
        NAVLINK-MAIN-TEXT
        ${isHovered ? hoveredStyle : 'HEADLINE-TEXT'}`}
        >
          {name}
        </span>
        {Array.from(Array(loopSize), (_e, i) => (
          <span
            key={i}
            className={`
            NAVLINK-SHADOW-TEXT
            absolute
            flex flex-row items-center         
            ease-in-out
            top-0
            ${isHovered ? 'visible font-bold italic' : 'font-normal opacity-0 invisible'}`}
            style={{
              transitionDuration: isHovered
                ? `${(loopSize - i + 1) * 0.1}s`
                : `${(loopSize - i + 1) * 0.14}s`,
              zIndex: `${i + 1 * -10}`,
              opacity: `${(loopSize - i) / (loopSize + 1)}`,
              transform: isHovered && `translate(0, ${(i + 1) * 12}px)`,
            }}
          >
            {name}
          </span>
        ))}
      </span>
    </NavLink>
  );
};

export default MenuNavLink;
