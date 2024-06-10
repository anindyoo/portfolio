const SkewedCard = (props) => {
  const {
    expRole,
    date,
    company,
    isOdd,
    buffer,
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
      border border-sunglowMuted
      flex flex-col gap-6
      h-[15rem] w-[37.5rem]
      px-6 py-5
      ${buffer ? '-skew-y-[15deg] bg-skewedCardBuffer'
        : `${isOdd
          ? 'skew-y-[15deg] bg-skewedCardOdd'
          : '-skew-y-[15deg] bg-skewedCardEven'
        }`
      }`}
      >
        <div className="
        CARD-TITLE-CONTAINER
        flex flex-col"
        >
          <span className="CARD-TITLE HEADLINE-TEXT text-5xl line-clamp-2">{expRole}</span>
          <span className="CARD-COMPANY text-sunglowMuted text-2xl line-clamp-1">{company}</span>
        </div>
        <span className="text-base font-light">{date}</span>
      </div>
    </div>
  );
};

export default SkewedCard;
