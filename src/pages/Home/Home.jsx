import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectsTimeline from '../../components/ProjectsComp/ProjectsTimeline';
import ExperiencesMarquee from '../../components/ExperiencesComp/ExperiencesMarquee';
import Contact from '../../components/Contact/Contact';
import projectsData from '../../data/project.json'

const Home = () => {
  const [topProjects, setTopProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'home — muhammad anindyo poetra mufatyta';

    const compareDate = (a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateB - dateA;
    };

    const filterProjects = projectsData.filter((project) => project.topProject);
    const sortedProjects = filterProjects.sort((a, b) => compareDate(a.startDate, b.startDate));
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
