import TimelineDesc from './TimelineDesc';
import TimelineImg from './TimelineImg';

const TimelineComp = (props) => {
  const {
    title,
    isOdd,
  } = props;

  const descAttributes = {
    title, isOdd,
  };

  return (
    <>
      {isOdd ? (
        <>
          <TimelineDesc {...descAttributes} />
          <TimelineImg />
        </>

      ) : (
        <>
          <TimelineImg />
          <TimelineDesc {...descAttributes} />
        </>

      )}
      <div className={
      `TIMLINE-BUFFER-CONTAINERE
      relative 
      h-screen max-h-60
      grid grid-cols-subgrid col-span-2`
      }
      >
        <div className={`
        TIMLINE-BUFFER-BORDER
        w-full h-[calc(100%+2px)]
        absolute
        top-[-1px]
        border-[-2px] border-t border-black
        ${isOdd
          ? 'col-start-2 border-r rounded-tr-[12.5rem]'
          : 'col-start-1 w-[50%] border-l rounded-tl-[12.5rem]'}`}
        />
      </div>
    </>
  );
};

export default TimelineComp;