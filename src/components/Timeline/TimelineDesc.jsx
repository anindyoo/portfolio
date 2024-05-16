/* eslint-disable no-unused-vars */
const TimelineDesc = (props) => {
  const {
    title,
    isOdd,
    isFirst,
    isLast,
  } = props;

  return (
    <div
      className={`
        TIMELINE-DESCRIPTION
        relative before:absolute before:inset-0
        flex flex-col justify-center
        w-full h-screen max-h-[calc(100vh*(66.25/100))]
        px-[2.188rem]
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
      <div className="
        DESCRIPTION-TEXT-CONTAINER
        flex flex-col"
      >
        <span className="text-base">year</span>
        <span className="text-[4rem] italic">{title}</span>
        <span className="text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
    </div>
  )
}

export default TimelineDesc;
