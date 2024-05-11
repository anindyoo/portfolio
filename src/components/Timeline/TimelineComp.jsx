import TimelineDesc from './TimelineDesc';
import TimelineImg from './TimelineImg';

const TimelineComp = (props) => {
  const {
    title,
    isOdd,
    isFirst,
    isLast,
  } = props;

  const descAttributes = {
    title, isOdd, isFirst, isLast,
  };

  return (
    <>
      {isOdd ? (
        <li className="grid grid-cols-subgrid col-span-2">
          <TimelineDesc {...descAttributes} />
          <TimelineImg />
        </li>

      ) : (
        <li className="grid grid-cols-subgrid col-span-2">
          <TimelineImg />
          <TimelineDesc {...descAttributes} />
        </li>

      )}
      {!isLast && (
        <div className={
        `TIMLINE-BUFFER-CONTAINERE
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
          border-t border-black
          ${isOdd
            ? 'col-start-2 w-full border-r rounded-tr-[12.5rem]'
            : 'col-start-1 w-[50%] border-l rounded-tl-[12.5rem]'}`}
          />
        </div>
      )}
    </>
  );
};

export default TimelineComp;
