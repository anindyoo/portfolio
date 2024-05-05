import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuNavLink = (props) => {
  const { name, link } = props;
  const [isHovered, setIsHovered] = useState(false)

  const hoveredStyle = 'italic font-bold text-white';
  const loopSize = 5;

  const onMouseEnterHandler = () => setIsHovered(true);

  const onMouseLeaveHandler = () => setIsHovered(false);

  return (
    <NavLink
      to={link}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className="
      NAVLINK-CONTAINER
      flex flex-col items-center
      relative"
    >
      <span className={`
      NAVLINK-MAIN-TEXT
      transition-all duration-100
      ${isHovered && hoveredStyle}`}
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
              ? `${(loopSize - i + 1) * 0.04}s`
              : `${(loopSize - i + 1) * 0.08}s`,
            zIndex: `${i + 1 * -10}`,
            opacity: `${(loopSize - i) / (loopSize + 1)}`,
            transform: isHovered && `translate(0, ${(i + 1) * 12}px)`,
          }}
        >
          {name}
        </span>
      ))}
    </NavLink>
  );
};

export default MenuNavLink;
