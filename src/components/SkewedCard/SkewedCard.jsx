const SkewedCard = (props) => {
  const {
    desc,
    isOdd,
  } = props;

  return (
    <div
      className="
      SKEWED-CARD
      absolute
      box-border"
    >
      <div className={`
      SKEWED-CARD-CONTAINER
      border border-blue-800
      flex flex-col gap-6
      h-[15rem] w-[37.5rem]
      px-6 py-5
      ${isOdd ? 'skew-y-[15deg]' : '-skew-y-[15deg]'}`}
      >
        <div className="
        CARD-TITLE-CONTAINER
        flex flex-col"
        >
          <span className="
          CARD-TITLE
          text-5xl"
          >
            Front End Engineer
            {' '}
            {desc}
          </span>
          <span className="CARD-COMPANY text-2xl">Company name</span>
        </div>
        <span className="text-base font-light">September 2021 — February 2024</span>
      </div>
    </div>
  );
};

export default SkewedCard;
