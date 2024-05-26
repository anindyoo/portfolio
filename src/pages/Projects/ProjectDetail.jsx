import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/project.json';
import NotFound from '../NotFound/NotFound';
import ProjectBanner from '../../components/ProjectsComp/ProjectBanner';
import ProjectDescription from '../../components/ProjectsComp/ProjectDescription';
import ProjectTechnologies from '../../components/ProjectsComp/ProjectTechnologies';
import ProjectGallery from '../../components/ProjectsComp/ProjectGallery';

const ProjectDetail = () => {
  const [project, setProject] = useState({});
  const { projectId } = useParams();

  useEffect(() => {
    const projectById = projectsData.find((proj) => proj.id === projectId);
    setProject(projectById);
  }, [projectId]);

  return (
    project === undefined
      ? <NotFound />
      : (
        <>
          <ProjectBanner />
          <ProjectDescription />
          <ProjectTechnologies />
          <ProjectGallery />
        </>
      )
  );
};

export default ProjectDetail;
