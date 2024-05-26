const ExperiencesTitle = (props) => {
  const {
    isOdd,
  } = props;

  return (
    <div
      className="
      EXPERIENCES-TITLE
      absolute
      box-border"
    >
      <div className={`
      EXPERIENCES-TITLE-CONTENT
      flex justify-between
      h-fit w-[37.5rem]
      ${isOdd ? 'skew-y-[15deg]' : '-skew-y-[15deg]'}`}
      >
        {[...'experiences • experiences • '].map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
    </div>
  )
};

export default ExperiencesTitle;
