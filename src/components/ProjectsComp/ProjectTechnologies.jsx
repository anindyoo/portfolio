const ProjectTechnologies = () => {
  console.log()

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
        <div className="
        FRONT-END-LIST-CONTAINER
        flex flex-col gap-2"
        >
          <span className="text-4xl italic">front end</span>
          <div className="
          FRONT-END-SUBTECH-LIST
          flex flex-col gap-2.5"
          >
            <div>
              <span className="text-xl">languages</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>HTML</li>
              </ul>
            </div>
            <div>
              <span className="text-xl">css</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <span className="text-xl">libraries</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="
        BACK-END-LIST-CONTAINER
        flex flex-col gap-2"
        >
          <span className="text-4xl italic">back end</span>
          <div className="
          FRONT-END-SUBTECH-LIST
          flex flex-col gap-2.5"
          >
            <div>
              <span className="text-xl">languages</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <span className="text-xl">databases</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <span className="text-xl">frameworks</span>
              <ul className="
              THE-LIST
              list-disc ps-8"
              >
                <li>Laravel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTechnologies;
