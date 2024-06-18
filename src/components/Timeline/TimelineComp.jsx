import { Fragment } from 'react';
import TimelineDesc from './TimelineDesc';
import TimelineImg from './TimelineImg';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

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

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const { screenBreakpoints } = config;

  return (
    <Fragment key={project.id}>
      {isOdd ? (
        <li className="grid col-span-2 lg:grid-cols-subgrid lg:col-span-2">
          {screenWidth > screenBreakpoints.tablet ? (
            <>
              <TimelineDesc {...descAttributes} />
              <TimelineImg project={project} />
            </>
          ) : (
            <TimelineDesc {...descAttributes} mobile />
          )}
        </li>

      ) : (
        <li className="grid col-span-2 lg:grid-cols-subgrid lg:col-span-2">
          {screenWidth > screenBreakpoints.tablet ? (
            <>
              <TimelineImg project={project} />
              <TimelineDesc {...descAttributes} />
            </>
          ) : (
            <>
              <TimelineDesc {...descAttributes} mobile />
              {/* <TimelineDesc {...descAttributes} buffer /> */}
            </>
          )}
        </li>
      )}

      {!isLast && screenWidth > screenBreakpoints.tablet && (
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
