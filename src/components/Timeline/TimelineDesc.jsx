import { Link } from 'react-router-dom';
import helpers from '../../helpers/helpers';

const TimelineDesc = (props) => {
  const {
    project,
    isOdd,
    isFirst,
    isLast,
  } = props;

  const dateRange = helpers.formateDateRange(project.startDate, project.endDate);

  return (
    <div
      className={`
      TIMELINE-DESCRIPTION
      relative before:absolute before:inset-0
      flex flex-col justify-center
      w-full h-screen max-h-[calc(100vh*(66.25/100))]
      px-[2.188rem]
      before:pointer-events-none
      ${(isFirst || isLast)
        ? `${isFirst
          ? 'before:bg-timeline_gradient_utb before:pb-px'
          : 'before:bg-timeline_gradient_btu '}`
        : 'before:bg-black before:pb-px'
      }
      ${isOdd
        ? `before:pl-px ${!isLast && 'before:rounded-bl-[12.5rem]'}`
        : `before:pr-px ${!isLast && 'before:rounded-br-[12.5rem]'}`
      }
      `}
    >
      <Link
        to={project.id}
        className="
        DESCRIPTION-TEXT-CONTAINER
        flex flex-col
        w-fit"
      >
        <span className="text-base font-medium">{dateRange}</span>
        <span className="text-[4rem] italic">{project.title}</span>
        <span className="text-base font-light">{project.subtitle}</span>
      </Link>
    </div>
  )
}

export default TimelineDesc;
