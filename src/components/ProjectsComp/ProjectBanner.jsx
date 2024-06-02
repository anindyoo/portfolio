import helpers from '../../helpers/helpers';

/* eslint-disable no-nested-ternary */
const ProjectBanner = (props) => {
  const { project } = props;

  return (
    <div className="
    PROJECT-BANNER
    flex flex-row justify-between items-center gap-8
    h-screen"
    >
      <div className="
      PROJECT-BANNER-DESCRIPTION
      before:bg-timeline_gradient_rtl
      relative before:absolute before:inset-0
      flex flex-col justify-between
      w-[50%] h-[60%]
      px-5 py-10 before:p-px
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
            <span className="TITLE text-[4rem] italic">{project.title}</span>
            <span className="DATE text-base font-medium">{project.startDate && helpers.formatDateRange(project?.startDate, project?.endDate)}</span>
          </div>
          <div className="
          MIDDLE-SECTION
          flex flex-col text-base"
          >
            <span className="
            SHORT-DESCRIPTION
            font-light
            pb-3"
            >
              {project.description?.short}
            </span>
            <div className="
            ROLE-AND-STATUS-SECTION
            flex flex-row justify-between
            pb-5"
            >
              <div className="
              ROLE-CONTAINER
              flex flex-row gap-1
              w-[50%]"
              >
                <span className="font-medium">Role:</span>
                <span>{project.role}</span>
              </div>
              <div className="
              STATUS-CONTAINER
              flex flex-row gap-1
              w-[50%]"
              >
                <span className="font-medium">Status:</span>
                <span>{project.status}</span>
              </div>
            </div>
            <ul className="
            TAGS
            flex flex-row flex-wrap gap-2.5
            text-sm"
            >
              {project.tags?.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-1 bg-gray-300 rounded-full"
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
        text-xl"
        >
          {project.links && Object.entries(project?.links).map(([key, link]) => link && (
            <li
              key={key}
              className="
              flex flex-row gap-2 items-center
              text-xl
              hover:underline"
            >
              <a href={link}>
                {key === 'repo'
                  ? 'visit repo'
                  : key === 'deployment'
                    ? 'visit website'
                    : 'download app'}
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 pt-px"
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
      <div className="PROJECT-BANNER-THUMBNAIL
      flex justify-center
      w-[50%] h-[60%]"
      >
        <img
          src="https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599"
          alt="alt"
          className="
          TIMELINE-IMAGE
          w-full h-full
          object-cover"
        />
      </div>
    </div>
  )
}

export default ProjectBanner;
