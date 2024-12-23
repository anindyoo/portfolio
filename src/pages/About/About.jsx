import React from 'react';
import { useEffect, useState } from 'react';
import portrait from '../../assets/images/portraits/mi_retrato.png';

const About = () => {
  const [tooltipHovered, setTooltipHovered] = useState(false);

  const handleTooltipHover = () => setTooltipHovered(!tooltipHovered);

  const portraitCaption = 'Anindyo, the website creator, holding a digitally painted sky full of clouds over his KTP or National Identity Card.';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'about — muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <div className="
    ABOUT-PAGE
    relative
    flex flex-row justify-between gap-11
    min-h-screen
    px-5 lg:px-0 py-[5.625rem]
    text-[100%]"
    >
      <div className="
      ABOUT-HELLO
      absolute top-14 md:top-auto md:left-[18rem] z-50 lg:static
      w-[16.25rem]
      pr-8 -ml-4 md:ml-0"
      >
        <div className="
        md:rotate-90
        bg-red-500m
        italic md:not-italic text-6xl md:text-[10rem] lg:text-[18.25rem]/[1em] font-bold text-sunglow
        cursor-vertical-text"
        >
          hello
        </div>
      </div>
      <div className="
      IMG-AND-ARTICLE-CONTAINER
      flex flex-col xl:flex-row justify-between gap-y-8 gap-x-11
      w-full"
      >
        <div className="
        ABOUT-IMAGE
        w-full h-full max-w-[22.5rem] lg:h-fit lg:max-w-96"
        >
          <div className="relative">
            <img
              src={portrait}
              alt={portraitCaption}
              className="
              w-full h-full max-w-[22.5rem] lg:h-[40rem] lg:max-w-96
              object-cover
              rounded-b-full rounded-tr-full"
            />
            <div className="
              absolute
              z-10 top-0
              w-full h-full max-w-[22.5rem] lg:h-[40rem] lg:max-w-96
              border border-sunglowMuted
              rounded-b-full rounded-tr-full
              bg-gradient-to-b from-transparent via-transparent to-warmMoss"
            />
          </div>
          <div className="
          PORTRAIT-CAPTION
          h-fit
          mt-10 text-base"
          >
            <span className="HEADLINE-TEXT text-xl">&#9650;</span>
            {' '}
            {portraitCaption}
          </div>
        </div>
        <article className="
        ABOUT-MAIN
        w-full
        xl:pl-10"
        >
          <h1 className="
          HEADLINE-TEXT
          text-5xl italic tracking-[-0.06em] font-medium
          text-right lg:text-left"
          >
            about me
          </h1>
          <section className="
          ABOUT-CONTENT
          flex flex-col gap-10
          text-xl text-justify leading-loose
          lg:pr-20 xl:pr-56 mt-6"
          >
            <article>
              Hey, I&#39;m Muhammad Anindyo Poetra Mufatyta, the man who&#39;s secretly hiding
              behind this website and the device that you use to access it right now
              (just kidding&#160;
              <span
                className="relative italic underline decoration-dotted hover:cursor-help"
                onMouseEnter={handleTooltipHover}
                onMouseLeave={handleTooltipHover}
              >
                ijbol
                <div className="
                absolute z-10 top-6 -right-4
                flex flex-col items-center
                not-italic"
                >
                  {tooltipHovered && <div className="w-[12rem] px-2 bg-zinc-800 text-white text-left">i just burst out laughing</div>}
                </div>
              </span>
              ).
              I&#39;m a front-end-focused web developer from the beloved city of Jakarta, Indonesia.
            </article>
            <p>
              Creating a website user interface has been my dream since I was still in Junior
              High School. My curiosity in web development sparked a little when I was taught
              about &#39;web&#39; creation using Blogger in a computer lesson in 2014. I painted
              that moment as a startling epiphany of who I have partially become today. My delight
              towards web development reawakened in the late era (mid-2019) of Senior High School
              when a group of students visited my school to promote their universities. One of the
              student groups exhibited a Computer Science major, in which they demonstrated how a
              website is made and how it can affect people&#39;s lives. By that moment, Computer
              Science was LOCKED IN as my major in higher education. Thankfully, I was able to
              enroll at Universitas Negeri Jakarta, of course, studying Computer Science, and was
              able to learn more about web development, especially the front-end aspect of it.
            </p>
            <p>
              I graduated in March 2024. Since then, I have kept
              burnishing my front-end web development capability by developing several small
              projects. Right now, I&#39;m also open to any freelance or full-time work
              possibilities to make use of my front-end knowledge. So, any form of connection would
              be a blessing to me. Hope we can meet again!
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default About;
