import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectsTimeline from '../../components/ProjectsTimeline/ProjectsTimeline';
import Experiences from '../../components/Experiences/Experiences';
import Contact from '../../components/Contact/Contact';
import projectsData from '../../data/project.json'

const Home = () => {
  const [topProjects, setTopProjects] = useState([]);

  const compareDate = (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  };

  const filterProjects = projectsData.filter((project) => project.topProject);
  const sortProjects = filterProjects.sort((a, b) => compareDate(a.startDate, b.startDate));

  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
    setTopProjects(sortProjects);
  }, []);

  return (
    <>
      <Banner />
      <ProjectsTimeline projects={topProjects} />
      <Experiences />
      <Contact />
    </>
  );
};

export default Home;
