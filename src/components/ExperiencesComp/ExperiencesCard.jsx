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
      border
      flex flex-col justify-between
      w-[16.25rem] h-[7.5rem]
      px-2.5 py-3
      -skew-y-12
      hover:cursor-pointer
      mb-8
      ${activeCardId === exp?.id
        ? 'bg-teal-300'
        : 'bg-white'}`}
    >
      <div className="
      TITLE-SUBTITLE
      flex flex-col"
      >
        <span className="text-xl font-bold leading-none line-clamp-2">{exp?.role}</span>
        <span className="text-base font-medium line-clamp-1">{exp?.company}</span>
      </div>
      <div className="DATE text-sm">{helpers.formatDateRange(exp?.startDate, exp?.endDate)}</div>
    </div>
  );
};

export default ExperiencesCard;
