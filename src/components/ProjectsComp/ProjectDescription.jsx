/* eslint-disable max-len */
const ProjectDescription = (props) => {
  const { project } = props;

  return (
    <div className="
    PROJECT-DESCRIPTION
    flex flex-col gap-16
    min-h-screen
    py-16"
    >
      <div className="
      THE-STORY
      HEADLINE-TEXT
      flex flex-row justify-between
      text-5xl"
      >
        {[...'the story'].map((letter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`the-story-${index}`}>{letter}</span>
        ))}
      </div>
      <div className="
      PROJECT-DESCRIPTION-CONTENT
      flex justify-center"
      >
        <p className="
        DESCRIPTION-PARAGRAPH
        max-w-[calc(100vw*37.64/100)]
        text-base font-normal leading-7 whitespace-pre-wrap"
        >
          {project?.description?.long}
        </p>
      </div>
    </div>
  )
}

export default ProjectDescription;
