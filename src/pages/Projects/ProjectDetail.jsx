import React from 'react';
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
    window.scrollTo(0, 0);

    const projectById = projectsData.find((proj) => proj.id === projectId);
    setProject(projectById);

    document.title = `${projectById.title} — muhammad anindyo poetra mufatyta`;
  }, [projectId]);

  return (
    project === undefined
      ? <NotFound />
      : (
        <>
          <ProjectBanner project={project} />
          <ProjectDescription project={project} />
          <ProjectTechnologies project={project} />
          <ProjectGallery project={project} />
        </>
      )
  );
};

export default ProjectDetail;
