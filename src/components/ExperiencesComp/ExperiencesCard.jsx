const ExperiencesCard = () => {
  console.log();

  return (
    <div className="
    EXPERIENCE-CARD
    border
    flex flex-col justify-between
    w-[16.25rem] h-[7.5rem]
    px-2.5 py-3
    -skew-y-12
    hover:cursor-pointer
    mb-8"
    >
      <div className="
      TITLE-SUBTITLE
      flex flex-col"
      >
        <span className="text-xl font-bold">Card title</span>
        <span className="text-base font-medium">Card subtitle</span>
      </div>
      <div className="DATE text-sm">August 2022-December 2024</div>
    </div>
  );
};

export default ExperiencesCard;
