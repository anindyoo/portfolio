import React from 'react';
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
    w-full lg:w-auto
    min-w-[16.25rem]
    mr-6"
    >
      <div className="
      EXPERIENCES-CARDS-LIST-SCROLL
      fixed top-0
      w-full lg:w-auto
      max-h-screen pr-10 lg:pr-6
      overflow-y-scroll"
      >
        <ul className="
        EXPERIENCES-CARDS-LIST-CONTAINER
        py-[5.625rem]"
        >
          <li>
            <div className="
            EXPERIENCES-TITLE
            HEADLINE-TEXT
            text-5xl
            -skew-y-12
            mb-10"
            >
              experiences
            </div>
          </li>
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
