const TimelineDesc = (props) => {
  const {
    title,
    isOdd,
    isFirst,
    isLast,
  } = props;
  // pl-[1px]
  return (
    <div
      className={`
        TIMELINE-DESCRIPTION
        flex flex-col justify-center
        w-full h-screen max-h-[calc(100vh*(66.25/100))]
        border-b-black
        -z-20
        ${(isFirst || isLast)
        ? `${isLast ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} from-slate-50 to-stone-900`
        : 'bg-black'}        
        ${isOdd
          ? `pl-[0.5px] ${!isLast && 'border-b rounded-bl-[12.5rem]'}`
          : `pr-[1px] ${!isLast && 'border-b rounded-br-[12.5rem]'}`
        }`}
    >
      <div className={`
      wrapper
      flex flex-col justify-center
      w-full h-screen max-h-[calc(100vh*(66.25/100))]
      px-[2.188rem] bg-white
      ${isOdd
        ? `${!isLast && 'rounded-bl-[12.5rem]'}`
        : `${!isLast && 'rounded-br-[12.5rem]'}`
        }`}
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
    </div>
  )
}

export default TimelineDesc;
