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
        className={`
        LINK-DESCRIPTION-CONTAINER
        flex flex-col justify-center
        w-full h-[calc(100%-100px)]
        ${isOdd && 'text-right'}
        `}
      >
        <div className={`
        DESCRIPTION-TEXT-CONTAINER
        flex flex-col
        ${mobile
          ? 'absolute bottom-16'
          : ''}
        `}
        >
          <span className="text-sunglowMuted text-base font-medium">{!buffer && dateRange}</span>
          <span className="HEADLINE-TEXT text-5xl md:text-[4rem] italic">{!buffer && project.title}</span>
          <span className="text-base font-light">{!buffer && project.subtitle}</span>
        </div>
        {mobile && (
          <div className={`
          MOBILE-IMAGE-CONTAINER
          absolute -z-10 top-14
          w-full h-full max-w-[540px] max-h-[360px]
          ${isOdd ? 'left-6' : 'right-6'}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Miamimetroarea.jpg"
              alt="background"
              className={`
              TIMLINE-MOBILE-THUMBNAIL
              w-full h-full 
              object-cover`}
            />
            <div className="
            absolute
            z-10 top-0
            w-full h-full
            bg-gradient-to-b from-transparent via-transparent to-warmMoss"
            />
          </div>
        )}
      </Link>
    </div>
  )
}

export default TimelineDesc;
