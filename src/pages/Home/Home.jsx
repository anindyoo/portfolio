import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectsTimeline from '../../components/ProjectsComp/ProjectsTimeline';
import ExperiencesMarquee from '../../components/ExperiencesComp/ExperiencesMarquee';
import Contact from '../../components/Contact/Contact';
import projectsData from '../../data/project.json';
import helpers from '../../helpers/helpers';

const Home = () => {
  const [topProjects, setTopProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'home — muhammad anindyo poetra mufatyta';

    const filterProjects = projectsData.filter((project) => project.topProject);
    const sortedProjects = helpers.sortByDate(filterProjects);
    setTopProjects(sortedProjects);
  }, []);

  return (
    <>
      <Banner />
      <ProjectsTimeline projects={topProjects} isHome />
      <ExperiencesMarquee />
      <Contact />
    </>
  );
};

export default Home;
