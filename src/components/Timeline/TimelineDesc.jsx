const TimelineDesc = (props) => {
  const {
    title,
    isOdd,
  } = props;

  return (
    <div className={`
      TIMELINE-DESCRIPTION
      border-b
      w-full h-screen max-h-[33.125rem]
      px-[2.188rem]
      flex flex-col justify-center
      ${isOdd
      ? 'border-l border-black rounded-bl-[12.5rem]'
      : 'border-r border-black rounded-br-[12.5rem]'}`}
    >
      <div className="
        DESCRIPTION-TEXT-CONTAINER
        border border-lime-700
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
