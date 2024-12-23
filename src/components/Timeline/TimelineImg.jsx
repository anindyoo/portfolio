import React from 'react';
import { Link } from 'react-router-dom';

const TimelineImg = (props) => {
  const { project } = props;
  const imgUrl = project.thumbnail
    ? new URL(`../../assets/images/project_gallery/${project.thumbnail}`, import.meta.url).href
    : '';

  return (
    <Link to={`/projects/${project.id}`}>
      <div className={`
      TIMELINE-IMAGE-CONTAINER
      relative
      w-full h-screen max-h-[calc(100vh*(66.25/100))]
      flex items-center justify-center`}
      >
        <img
          src={imgUrl}
          alt={project.title}
          className="
          TIMELINE-IMAGE
          object-cover
          w-[calc(100vw*(40.28/100))] h-[calc(100vh*(56.25/100))]"
        />
        <div className="
        absolute z-10
        w-[calc(100vw*(40.28/100))] h-[calc(100vh*(56.25/100))]
        border border-sunglowMuted
        bg-gradient-to-b from-transparent via-transparent to-warmMoss"
        />
      </div>
    </Link>
  );
};

export default TimelineImg;
