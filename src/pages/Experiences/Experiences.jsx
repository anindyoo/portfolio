import { useEffect, useState } from 'react';
import ExperiencesCardsList from '../../components/ExperiencesComp/ExperiencesCardsList';
import ExperiencesArticle from '../../components/ExperiencesComp/ExperiencesArticle';
import experiencesData from '../../data/experience.json';
import helpers from '../../helpers/helpers';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const activeCardClickHandler = (exp) => {
    setActiveCard(exp);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    const sortedExperiences = helpers.sortByDate(experiencesData);
    setExperiences(sortedExperiences);
    setActiveCard(sortedExperiences[0]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCard]);

  return (
    <div className="
    EXPERIENCES-PAGE
    flex flex-row
    max-h-[calc(100vh-20px)]"
    >
      <ExperiencesCardsList
        experiences={experiences}
        activeCardId={activeCard?.id}
        activeCardClickHandler={activeCardClickHandler}
      />
      <ExperiencesArticle activeCard={activeCard} />
    </div>
  );
};

export default Experiences;
