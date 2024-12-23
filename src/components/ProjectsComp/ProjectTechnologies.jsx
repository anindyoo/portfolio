import React from 'react';

const ProjectTechnologies = (props) => {
  const { project } = props;
  const isNotEmpty = (arrayObjects) => Object.values(arrayObjects).some((value) => value.length);

  return (
    <div className="
    PROJECT-TECHNOLOGIES
    flex flex-col gap-16
    min-h-screen
    py-16"
    >
      <div className="
      THE-TECHNOLOGIES
      HEADLINE-TEXT
      flex flex-row justify-between
      text-4xl sm:text-5xl"
      >
        {[...'the technologies'].map((letter, index) => (
          <span key={`the-technologies-${index}`}>{letter}</span>
        ))}
      </div>
      <div className="
      PROJECT-TECHNOLOGIES-CONTENT
      flex flex-row flex-wrap justify-between lg:justify-evenly gap-x-8 lg:gap-x-32 gap-y-14
      mx-auto
      max-w-[calc(100vw*82/100)] lg:w-full
      tracking-[-0.06em]"
      >
        {project.technologies
        && Object
          .entries(project?.technologies)
          .map(([stack, subStacks]) => isNotEmpty(subStacks) && (
          <div
            key={stack}
            className={`
            ${stack}-LIST-CONTAINER
            flex flex-col gap-2`}
          >
            <span className="text-4xl text-sunglowMuted italic">{stack.split('-').join(' ')}</span>
            <div className={`
            ${stack}-SUBSTACK-LIST-CONTAINER
            flex flex-col gap-2.5`}
            >
              {Object.entries(subStacks).map(([subStack, techs]) => techs.length > 0 && (
                <div
                  key={subStack}
                  className={`
                  ${subStack}-SUBSTACK
                  max-w-[calc(100vw*50/100)]`}
                >
                  <span className="text-sunglowMuted underline text-xl">{subStack.split('-').join(' ')}</span>
                  <ul className={`
                  ${subStack}-TECH-LIST
                  list-disc ps-8`}
                  >
                    {techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectTechnologies;
