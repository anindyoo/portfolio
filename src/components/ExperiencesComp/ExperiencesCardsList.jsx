import ExperiencesCard from './ExperiencesCard';

const ExperiencesCardsList = () => {
  console.log();

  return (
    <aside className="
    EXPERIENCES-CARDS-LIST-SECTION
    w-[16.25rem]"
    >
      <div className="
      EXPERIENCES-CARDS-LIST-SCROLL
      fixed top-0
      max-h-screen
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
