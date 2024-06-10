/* eslint-disable react/no-array-index-key */
import TimelineComp from '../Timeline/TimelineComp';

const ProjectsTimeline = (props) => {
  const {
    projects,
    isHome,
  } = props;

  const timelinesLength = projects.length;

  return (
    <section className="
      PROJECTS-SECTION
      flex flex-col
      py-[7.5rem]"
    >
      <div className={`
      PROJECTS-TITLE
      HEADLINE-TEXT
      w-full
      flex flew-row justify-between
      ${isHome ? 'text-4xl' : 'text-6xl font-extralight'}`}
      >
        {[...`${isHome ? 'highlighted ' : ''}projects`].map((letter, index) => (
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
      STRETCH-MORE
      flex justify-center items-center
      h-12 max-w-[calc(100vw-56px)]
      text-center text-3xl font-extralight text-sunglowMuted
      hover:underline
      tracking-[2em] transition-all ease-out duration-500 hover:tracking-[0.6em]"
      >
        see more projects
      </div>
    </section>
  );
};

export default ProjectsTimeline;
