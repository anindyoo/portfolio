const TimelineDesc = (props) => {
  const {
    title,
    isOdd,
    isLast,
  } = props;

  return (
    <div
      className={`
        TIMELINE-DESCRIPTION
        w-full h-screen max-h-[calc(100vh*(66.25/100))]
        px-[2.188rem]
        flex flex-col justify-center
        border-black 
        ${isOdd
        ? `border-l ${!isLast && 'border-b rounded-bl-[12.5rem]'}`
        : `border-r ${!isLast && 'border-b rounded-br-[12.5rem]'}`
        }`}
    >
      <div className="
        DESCRIPTION-TEXT-CONTAINER
        flex flex-col"
      >
        <span className="text-base">year</span>
        <span className="text-[4rem] italic">{title}</span>
        <span className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
    </div>
  )
}

export default TimelineDesc;
