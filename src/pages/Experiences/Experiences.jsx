import { useEffect } from 'react';
import ExperiencesCardsList from '../../components/ExperiencesComp/ExperiencesCardsList';
import ExperiencesArticle from '../../components/ExperiencesComp/ExperiencesArticle';

const Experiences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="
    EXPERIENCES-PAGE
    flex flex-row
    max-h-[calc(100vh-20px)]"
    >
      <ExperiencesCardsList />
      <ExperiencesArticle />
    </div>
  );
};

export default Experiences;
