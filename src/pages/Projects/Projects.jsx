import { useEffect, useState } from 'react';
import projectsData from '../../data/project.json'
import ProjectsTimeline from '../../components/ProjectsComp/ProjectsTimeline';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = 'projects - muhammad anindyo poetra mufatyta';

    const compareDate = (a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateB - dateA;
    };

    const sortedProjects = projectsData.sort((a, b) => compareDate(a.startDate, b.startDate));
    setProjects(sortedProjects)
  }, []);

  return (
    <ProjectsTimeline projects={projects} isHome={false} />
  )
}

export default Projects;
