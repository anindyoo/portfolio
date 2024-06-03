import ExperiencesCard from './ExperiencesCard';

const ExperiencesCardsList = (props) => {
  const {
    experiences,
    activeCardId,
    activeCardClickHandler,
  } = props;

  return (
    <aside className="
    EXPERIENCES-CARDS-LIST-SECTION
    flex
    min-w-[16.25rem]
    mr-6"
    >
      <div className="
      EXPERIENCES-CARDS-LIST-SCROLL
      fixed top-0
      max-h-screen pr-6
      overflow-y-scroll"
      >
        <ul className="
        EXPERIENCES-CARDS-LIST-CONTAINER
        py-[5.625rem]"
        >
          {experiences.map((exp) => (
            <li key={exp.id}>
              <ExperiencesCard
                exp={exp}
                activeCardClickHandler={activeCardClickHandler}
                activeCardId={activeCardId}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ExperiencesCardsList;
