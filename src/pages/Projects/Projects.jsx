import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = 'projects - muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <>
      Projects Page.
    </>
  )
}

export default Projects;
