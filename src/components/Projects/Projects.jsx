/* eslint-disable react/no-array-index-key */
import TimelineComp from '../Timeline/TimelineComp';

const Projects = (props) => {
  const { projects } = props;

  const timelinesLength = projects.length;

  return (
    <section className="
      PROJECTS-SECTION
      flex flex-col
      py-[7.5rem]"
    >
      <div className="
      PROJECTS-TITLE
      w-full
      flex flew-row justify-between
      text-2xl"
      >
        {[...'latest projects'].map((letter, index) => (
          <span key={`latestProjects-${index}`}>{letter}</span>
        ))}
      </div>
      <ul className="
      PROJECTS-TIMLINE-CONTAINER
      grid grid-cols-2"
      >
        {projects.map((project, index) => (
          <TimelineComp
            key={project.id}
            project={project}
            isOdd={(index + 1) % 2 === 1}
            isFirst={index === 0}
            isLast={timelinesLength === index + 1}
          />
        ))}
      </ul>
      <div className="
      PROJECTS-MORE
      w-full
      flex flew-row justify-between
      text-2xl"
      >
        {[...'see more projects'].map((letter, index) => (
          <span key={`seeMoreProjects-${index}`}>{letter}</span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
