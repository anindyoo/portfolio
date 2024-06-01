import ExperiencesCard from './ExperiencesCard';

const ExperiencesCardsList = () => {
  console.log();

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
        <div className="
        EXPERIENCES-CARDS-LIST-CONTAINER
        py-[5.625rem]"
        >
          {[...'1234567890'].map((x) => <ExperiencesCard key={x} />)}
        </div>
      </div>

    </aside>
  );
};

export default ExperiencesCardsList;
