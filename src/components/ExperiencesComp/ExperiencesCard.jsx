import helpers from '../../helpers/helpers';

const ExperiencesCard = (props) => {
  const {
    exp,
    activeCardId,
    activeCardClickHandler,
  } = props;

  const cardClickHandler = () => activeCardClickHandler(exp);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={cardClickHandler}
      onClick={cardClickHandler}
      className={`
      EXPERIENCE-CARD
      appearance-none
      border border-sunglowMuted
      flex flex-col justify-between
      w-[16.25rem] h-[7.5rem]
      px-2.5 py-3
      -skew-y-12
      hover:cursor-pointer
      mb-8
      outline-sunglow
      transition-all duration-400 ease-out
      ${activeCardId === exp?.id
        ? 'bg-skewedCardOdd'
        : 'hover:bg-sunglowMuted hover:!text-warmMoss'}`}
    >
      <div className={`
      TITLE-SUBTITLE
      flex flex-col hover:!text-warmMoss`}
      >
        <span className={`
        EXP-ROLE
        text-xl font-bold leading-none line-clamp-2
        ${activeCardId !== exp?.id && 'HEADLINE-TEXT'}`}
        >
          {exp?.role}
        </span>
        <span className={`
        EXP-COMPANY
        text-base font-medium line-clamp-1
        ${activeCardId !== exp?.id && 'text-sunglowMuted'}`}
        >
          {exp?.company}
        </span>
      </div>
      <div className={`
      EXP-DATE 
      text-sm`}
      >
        {helpers.formatDateRange(exp?.startDate, exp?.endDate)}
      </div>
    </div>
  );
};

export default ExperiencesCard;
