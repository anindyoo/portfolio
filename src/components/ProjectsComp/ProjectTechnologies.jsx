const ProjectTechnologies = (props) => {
  const { project } = props;
  const isNotEmpty = (arrayObjects) => Object.values(arrayObjects).some((value) => value.length);

  return (
    <div className="
    PROJECT-TECHNOLOGIES
    flex flex-col gap-16 border
    min-h-screen
    py-16"
    >
      <div className="
      THE-TECHNOLOGIES
      flex flex-row justify-between
      text-5xl"
      >
        {[...'the technologies'].map((letter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`the-technologies-${index}`}>{letter}</span>
        ))}
      </div>
      <div className="
      PROJECT-TECHNOLOGIES-CONTENT
      flex flex-row justify-center gap-32
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
            <span className="text-4xl italic">{stack.split('-').join(' ')}</span>
            <div className={`
            ${stack}-SUBSTACK-LIST-CONTAINER
            flex flex-col gap-2.5`}
            >
              {Object.entries(subStacks).map(([subStack, techs]) => techs.length > 0 && (
                <div
                  key={subStack}
                  className={`
                  ${subStack}-SUBSTACK`}
                >
                  <span className="text-xl">{subStack.split('-').join(' ')}</span>
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
  )
}

export default ProjectTechnologies;
