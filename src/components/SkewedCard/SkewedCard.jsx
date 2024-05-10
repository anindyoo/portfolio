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
      h-[15rem] w-[37.5rem]
      ${isOdd ? 'skew-y-[15deg]' : '-skew-y-[15deg]'}`}
      >
        card
        {' '}
        {desc}
      </div>
    </div>
  );
};

export default SkewedCard;
