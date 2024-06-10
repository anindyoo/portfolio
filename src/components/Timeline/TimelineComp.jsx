import { Fragment } from 'react';
import TimelineDesc from './TimelineDesc';
import TimelineImg from './TimelineImg';

const TimelineComp = (props) => {
  const {
    project,
    isOdd,
    isFirst,
    isLast,
  } = props;

  const descAttributes = {
    project, isOdd, isFirst, isLast,
  };

  return (
    <Fragment key={project.id}>
      {isOdd ? (
        <li className="grid grid-cols-subgrid col-span-2">
          <TimelineDesc {...descAttributes} />
          <TimelineImg project={project} />
        </li>

      ) : (
        <li className="grid grid-cols-subgrid col-span-2">
          <TimelineImg project={project} />
          <TimelineDesc {...descAttributes} />
        </li>

      )}
      {!isLast && (
        <li className={
        `TIMLINE-BUFFER-CONTAINER
        relative 
        h-screen max-h-60
        grid grid-cols-subgrid col-span-2`
        }
        >
          <div className={`
          TIMLINE-BUFFER-BORDER
          h-[calc(100%+2px)]
          absolute
          top-[-1px]
          border-t border-sunglowMuted
          ${isOdd
            ? 'col-start-2 w-full border-r rounded-tr-[12.5rem]'
            : 'col-start-1 w-[50%] border-l rounded-tl-[12.5rem]'}`}
          />
        </li>
      )}
    </Fragment>
  );
};

export default TimelineComp;
