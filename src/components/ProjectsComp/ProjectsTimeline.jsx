import React from 'react';
import StrecthedStrings from '../StretchedString/StretchedString';
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
    py-20 lg:py-[7.5rem]"
    >
      <div className={`
      PROJECTS-TITLE
      HEADLINE-TEXT
      w-full
      flex flew-row justify-between
      ${isHome ? 'text-2xl md:text-4xl' : 'text-6xl font-extralight'}`}
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
      {isHome && (
        <StrecthedStrings
          text="see more projects"
          link="/projects"
        />
      )}
    </section>
  );
};

export default ProjectsTimeline;
