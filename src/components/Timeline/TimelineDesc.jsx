import { Link } from 'react-router-dom';
import helpers from '../../helpers/helpers';

const TimelineDesc = (props) => {
  const {
    project,
    isOdd,
    isFirst,
    isLast,
    mobile,
    buffer,
  } = props;

  const dateRange = helpers.formatDateRange(project.startDate, project.endDate);

  return (
    <div
      className={`
      TIMELINE-DESCRIPTION
      relative before:absolute before:inset-0
      flex flex-col justify-center
      w-full h-screen max-h-[500px] lg:max-h-[calc(100vh*(66.25/100))]
      px-[2.188rem]      
      before:pointer-events-none
      ${mobile && 'mb-[-1px]'}
      ${(isFirst || isLast)
        ? `${isFirst
          ? 'before:bg-timeline_gradient_utb before:pb-px'
          : `before:bg-timeline_gradient_btu ${mobile && 'before:pt-px'}`
        }`
        : `before:bg-sunglowMuted before:pb-px ${mobile && 'before:pt-px'}`
      } 
      ${isOdd
        ? `before:pl-px 
          ${mobile && 'before:w-[50%]'}
          ${!isLast
          ? `${mobile || buffer
            ? `before:rounded-bl-[4.5rem] ${!isFirst && 'before:rounded-tl-[4.5rem]'}`
            : 'before:rounded-bl-[12.5rem]'
          }`
          : `${mobile && 'before:rounded-tl-[4.5rem]'}`
        }`
        : `before:pr-px 
          ${mobile && 'before:w-[50%] before:ml-auto'}
          ${!isLast
          ? `${mobile || buffer
            ? `before:rounded-br-[4.5rem] ${!isFirst && 'before:rounded-tr-[4.5rem]'}`
            : 'before:rounded-br-[12.5rem]'}`
          : `${mobile && 'before:rounded-tr-[4.5rem]'}`
        }`
      }`}
    >
      <Link
        to={`/projects/${project.id}`}
        className="
        DESCRIPTION-TEXT-CONTAINER
        flex flex-col
        w-fit"
      >
        <span className="text-sunglowMuted text-base font-medium">{!buffer && dateRange}</span>
        <span className="HEADLINE-TEXT text-[4rem] italic">{!buffer && project.title}</span>
        <span className="text-base font-light">{!buffer && project.subtitle}</span>
      </Link>
    </div>
  )
}

export default TimelineDesc;
