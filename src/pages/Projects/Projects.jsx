import { useEffect, useState } from 'react';
import projectsData from '../../data/project.json'
import ProjectsTimeline from '../../components/ProjectsTimeline/ProjectsTimeline';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const compareDate = (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  };

  const sortedProjects = projectsData.sort((a, b) => compareDate(a.startDate, b.startDate));

  useEffect(() => {
    document.title = 'projects - muhammad anindyo poetra mufatyta';
    setProjects(sortedProjects)
  }, []);

  return (
    <ProjectsTimeline projects={projects} isHome={false} />
  )
}

export default Projects;
