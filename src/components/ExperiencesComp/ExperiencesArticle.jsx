import React from 'react';
import { Link } from 'react-router-dom';
import helpers from '../../helpers/helpers';
import projectsData from '../../data/project.json';

const ExperiencesArticle = (props) => {
  const {
    activeCard,
    closeCardHandler,
    mobile,
  } = props;

  const associatedProjects = activeCard?.associatedProjectsIds
    .map((associatedProjectId) => projectsData
      .find((project) => project.id === associatedProjectId));

  const closeArticleClickHandler = () => closeCardHandler();

  return (
    activeCard ? (
      <article className="
      EXPERIENCE-ARTICLE
      flex flex-col gap-[3.125rem]
      w-full h-fit
      my-[1.875rem]
      text-justify
      px-2.5 pb-28 pt-6 lg:pt-0 lg:pr-20
      overflow-hidden"
      >
        {mobile && (
          <button
            type="button"
            onClick={closeArticleClickHandler}
            className="
            CLOSE-ARTICLE-BUTTON
            border"
          >
            close
          </button>
        )}
        <section className="
        ARTICLE-HEADER
        flex flex-col gap-2
        w-full
        text-left border-b-[1px] border-sunglowMuted
        pb-[1.875rem]"
        >
          <h1 className="
          HEADLINE-TEXT
          text-2xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-[-0.04em] lg:leading-normal
          mb-1 lg:mb-0"
          >
            {activeCard?.role}
          </h1>
          <div className="
          HEADER-INFOS
          flex flex-col gap-1.5
          text-lg lg:text-xl font-medium tracking-tight
          text-sunglowMuted"
          >
            <table className="table-auto">
              <tbody className="flex flex-col gap-3">
                <tr>
                  <th>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  </th>
                  <td className="pl-3">
                    {activeCard?.company}
                  </td>
                </tr>
                <tr>
                  <th>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </th>
                  <td className="pl-3">
                    {activeCard?.location}
                  </td>
                </tr>
                <tr>
                  <th>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                  </th>
                  <td className="pl-3">
                    {activeCard?.startDate
                    && helpers.formatDateRange(activeCard?.startDate, activeCard?.endDate)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="
        ARTICLE-PREFACE
        flex flex-col gap-3"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">preface to the experience</h1>
          <p className="leading-relaxed">{activeCard?.preface}</p>
        </section>
        <section className="
        ARTICLE-MAIN
        flex flex-col gap-3"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">the experience</h1>
          <p className="leading-relaxed">{activeCard?.workDescription}</p>
          <ul className="list-inside list-disc">
            {activeCard?.worksList.map((item, index) => (
              <li key={item[0] + index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
        <section className="
        ARTICLE-PROJECTS
        flex flex-col gap-3"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">associated projects</h1>
          <ul className="
          ASSOCIATED-PROJECT-LIST
          flex flex-row flex-wrap gap-10"
          >
            {!associatedProjects?.length
              ? (<p className="italic">No projects are available.</p>)
              : associatedProjects.map((project) => (
                <li
                  key={project.id}
                  className="w-full max-w-[27.75rem]"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="
                    ASSOCIATED-PROJECT-CARD
                    flex justify-center items-center
                    w-full max-w-[27.75rem] h-[15rem]
                    bg-yellow-300"
                    >
                      <span className="text-4xl font-medium italic tracking-[-0.08em]">{project.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
        <section className="
        ARTICLE-CERTIFICATES
        flex flex-col gap-3
        text-left"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">certificates & credentials</h1>
          <ul className="CERTIFICATES-LIST flex flex-col gap-3">
            {!activeCard?.certificates?.length
              ? (<p className="italic">No certificates are available.</p>)
              : activeCard?.certificates.map((certificate) => (
                <li key={certificate.link}>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    CERTIFICATE-LINK
                    flex flex-row gap-2
                    w-full
                    transition-all ease-out hover:text-sunglow"
                  >
                    <span className="no-underline">•</span>
                    <div className="flex flex-row justify-between items-center sm:justify-normal gap-1 w-full">
                      <span className="underline">{certificate.title}</span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 pt-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </section>
        <section className="
        ARTICLE-LINKS
        flex flex-col gap-3
        text-left"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">external links</h1>
          <ul className="LINKS-LIST flex flex-row flex-wrap gap-3">
            {!activeCard?.links?.length
              ? (<p className="italic">No external links are available.</p>)
              : activeCard?.links.map((link) => (
                <li
                  key={link.link}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    LINK-CONTAINER
                    flex flex-row gap-1
                    transition-all duration-200 ease-in
                    bg-vagueGold45 hover:bg-skewedCardOdd
                    text-warmMoss hover:text-lightSweetener font-semibold
                    rounded-full
                    px-4 py-2"
                  >
                    <span>{link.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 p-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </li>
              ))}
          </ul>
        </section>
        <section className="
        ARTICLE-GALLERY
        flex flex-col gap-3"
        >
          <h1 className="text-sunglowMuted text-xl lg:text-2xl font-medium tracking-[-0.08em] italic">gallery</h1>
        </section>
      </article>
    ) : (
      <div className="
      BLANK-ARTICLE
      flex items-center justify-center
      w-full"
      >
        <h1 className="
        HEADLINE-TEXT
        text-4xl text-center italic
        px-10"
        >
          select the card on the left bar to view the experience detail.
        </h1>
      </div>
    )
  );
};

export default ExperiencesArticle;
