const SkewedCard = (props) => {
  const {
    desc,
  } = props;

  return (
    <div
      className="
      SKEWED-CARD
      border border-red-700
      absolute
      h-[15rem] w-[37.5rem]"
    >
      card
      {' '}
      {desc}
    </div>
  );
};

export default SkewedCard;
