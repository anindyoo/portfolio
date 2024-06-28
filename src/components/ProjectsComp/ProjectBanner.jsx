import helpers from '../../helpers/helpers';

/* eslint-disable no-nested-ternary */
const ProjectBanner = (props) => {
  const { project } = props;

  return (
    <div className="
    PROJECT-BANNER
    flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-8
    w-full lg:w-auto
    lg:h-screen"
    >
      <div className="
      PROJECT-BANNER-DESCRIPTION
      before:bg-timeline_gradient_rtl
      relative before:absolute before:inset-0
      flex flex-col justify-between
      w-[95%] lg:w-[50%] lg:h-[60%]
      mt-60 lg:mt-0 px-5 py-10 before:p-px
      before:rounded-e-[5rem]
      before:pointer-events-none"
      >
        <div className="
        DESCRIPTION-DETAIL
        flex flex-col gap-9"
        >
          <div className="
          TOP-SECTION
          flex flex-col"
          >
            <span className="TITLE HEADLINE-TEXT text-4xl 2xs:text-5xl md:text-[4rem] italic">{project.title}</span>
            <span className="
            DATE
            mt-2 md:mt-0
            text-sunglowMuted text-base font-medium"
            >
              {project.startDate && helpers.formatDateRange(project?.startDate, project?.endDate)}
            </span>
          </div>
          <div className="
          MIDDLE-SECTION
          flex flex-col text-base"
          >
            <span className="
            SHORT-DESCRIPTION
            font-light
            pb-6 lg:pb-3"
            >
              {project.description?.short}
            </span>
            <div className="
            ROLE-AND-STATUS-SECTION
            flex flex-col 2xs:flex-row justify-between gap-2 lg:gap-0
            pb-6 lg:pb-5"
            >
              <div className="
              ROLE-CONTAINER
              flex flex-row gap-1
              xs:w-[50%]"
              >
                <span className="text-sunglowMuted font-medium">Role:</span>
                <span>{project.role}</span>
              </div>
              <div className="
              STATUS-CONTAINER
              flex flex-row gap-1
              xs:w-[50%]"
              >
                <span className="text-sunglowMuted font-medium">Status:</span>
                <span>{project.status}</span>
              </div>
            </div>
            <ul className="
            TAGS-LIST
            flex flex-row flex-wrap gap-2.5
            text-sm"
            >
              {project.tags?.map((tag) => (
                <li
                  key={tag}
                  className="
                  TAG
                  px-3 py-1
                  rounded-full
                  bg-vagueGold45
                  text-warmMoss font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="
        DESCRIPTION-LINKS
        flex flex-row flex-wrap gap-6
        text-xl
        mt-10 lg:mt-0"
        >
          {project.links && Object.entries(project?.links).map(([key, link]) => link && (
            <li
              key={key}
              className="
              flex flex-row gap-2 items-center
              text-xl font-bold tracking-tighter
              hover:underline"
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="HEADLINE-TEXT"
              >
                {key === 'repo'
                  ? 'visit repo'
                  : key === 'deployment'
                    ? 'visit website'
                    : 'download app'}
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 pt-px stroke-sunglowMuted"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="
      PROJECT-BANNER-THUMBNAIL
      absolute -z-20 top-0 left-0 lg:static
      flex justify-center
      w-full lg:w-[50%] h-[400px] lg:h-[60%]"
      >
        <img
          src="https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599"
          alt="alt"
          className="
          TIMELINE-IMAGE
          FADE-IMG
          w-full lg:h-full
          object-cover"
        />
      </div>
    </div>
  )
}

export default ProjectBanner;
