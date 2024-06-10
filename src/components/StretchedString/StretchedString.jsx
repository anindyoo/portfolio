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
      flex justify-center items-center
      h-12 max-w-[calc(100vw-56px)]
      text-center text-3xl font-extralight text-sunglowMuted
      hover:underline
      tracking-[2em] transition-all ease-out duration-500 hover:tracking-[0.6em]"
    >
      {text}
    </Link>
  );
};

export default StrecthedStrings;
