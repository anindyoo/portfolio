import React from 'react';
import { Link } from 'react-router-dom';

const StrecthedStrings = (props) => {
  const {
    text,
    link,
  } = props;

  return (
    <Link
      to={link}
      className="
      STRETCHED-STRING
      h-12 w-full
      text-center text-xl lg:text-3xl font-extralight text-sunglowMuted
      hover:underline
      tracking-[1em] lg:tracking-[2em] transition-all ease-out duration-500 hover:tracking-[0.6em]"
    >
      {text}
    </Link>
  );
};

export default StrecthedStrings;
