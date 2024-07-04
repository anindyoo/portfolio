import { useEffect, useState } from 'react';
import ExperiencesCardsList from '../../components/ExperiencesComp/ExperiencesCardsList';
import ExperiencesArticle from '../../components/ExperiencesComp/ExperiencesArticle';
import experiencesData from '../../data/experience.json';
import helpers from '../../helpers/helpers';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const laptopBreakpoint = config.screenBreakpoints.laptop;

  const activeCardClickHandler = (exp) => {
    setActiveCard(exp);
  };

  const closeCardHandler = () => {
    setActiveCard(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'experiences — muhammad anindyo poetra mufatyta';

    const sortedExperiences = helpers.sortByDate(experiencesData);
    setExperiences(sortedExperiences);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCard]);

  return (
    <div className="
    EXPERIENCES-PAGE
    flex flex-row
    min-h-screen"
    >
      {((!activeCard && screenWidth < laptopBreakpoint) || (screenWidth >= laptopBreakpoint)) && (
        <ExperiencesCardsList
          experiences={experiences}
          activeCardId={activeCard?.id}
          activeCardClickHandler={activeCardClickHandler}
        />
      )}
      {screenWidth >= laptopBreakpoint ? (
        <ExperiencesArticle activeCard={activeCard} />
      ) : (
        activeCard && (
          <div className="
          ARTICLE-MOBILE-CONTAINER
          absolute z-[60]
          w-screen
          pr-10"
          >
            <ExperiencesArticle
              activeCard={activeCard}
              closeCardHandler={closeCardHandler}
              mobile
            />
          </div>
        )
      )}
    </div>
  );
};

export default Experiences;
