const TimelineImg = () => {
  console.log()

  return (
    <div className={`
      TIMELINE-IMAGE-CONTAINER
      w-full h-screen max-h-[calc(100vh*(66.25/100))]
      flex items-center justify-center`}
    >
      <img
        src="https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599"
        alt="alt"
        className="
        TIMELINE-IMAGE
        object-cover
        w-[calc(100vw*(40.28/100))] h-[calc(100vh*(56.25/100))]"
      />
    </div>
  );
};

export default TimelineImg;
