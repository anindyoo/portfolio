import { useEffect, useState } from 'react';
import projectsData from '../../data/project.json'
import ProjectsTimeline from '../../components/ProjectsComp/ProjectsTimeline';
import helpers from '../../helpers/helpers';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'projects — muhammad anindyo poetra mufatyta';

    const sortedProjects = helpers.sortByDate(projectsData)
    setProjects(sortedProjects)
  }, []);

  return (
    <ProjectsTimeline projects={projects} isHome={false} />
  )
}

export default Projects;
