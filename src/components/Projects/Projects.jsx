import TimelineComp from '../Timeline/TimelineComp';

const Projects = () => {
  const timelines = ['title 1', 'title 2', 'title 3', 'title 4'];
  const timelinesLength = timelines.length;
  return (
    <section className="
      PROJECTS-SECTION
      flex flex-col
      pt-[7.5rem]"
    >
      <div className="
      PROJECTS-TITLE
      w-full
      flex flew-row justify-between
      text-2xl"
      >
        {[...'latest projects'].map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
      <div className="
      PROJECTS-TIMLINE-CONTAINER
      grid grid-cols-2"
      >
        {timelines.map((x, index) => (
          <TimelineComp
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={x}
            isOdd={(index + 1) % 2 === 1}
            isLast={timelinesLength === index + 1}
          />
        ))}
      </div>
      <div className="
      PROJECTS-MORE
      w-full
      flex flew-row justify-between
      text-2xl"
      >
        {[...'see more projects'].map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
