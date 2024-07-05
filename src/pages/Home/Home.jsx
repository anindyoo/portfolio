import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectsTimeline from '../../components/ProjectsComp/ProjectsTimeline';
import ExperiencesMarquee from '../../components/ExperiencesComp/ExperiencesMarquee';
import projectsData from '../../data/project.json';
import experiencesData from '../../data/experience.json';
import helpers from '../../helpers/helpers';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

const Home = () => {
  const [topProjects, setTopProjects] = useState([]);
  const [topExp, setTopExp] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'home — muhammad anindyo poetra mufatyta';

    const filterProjects = projectsData.filter((project) => project.topProject);
    const sortedProjects = helpers.sortByDate(filterProjects);

    const sortedExp = helpers.sortByDate(experiencesData);

    setTopProjects(sortedProjects);
    setTopExp(sortedExp);
  }, []);

  return (
    <div className="
    HOME-PAGE
    min-h-screen"
    >
      <Banner />
      <ProjectsTimeline projects={topProjects} isHome />
      <ExperiencesMarquee experiences={topExp} />
      <ContactBanner />
    </div>
  );
};

export default Home;
