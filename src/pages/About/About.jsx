import { useEffect, useState } from 'react';

const About = () => {
  const [tooltipHovered, setTooltipHovered] = useState(false);

  const handleTooltipHover = () => setTooltipHovered(!tooltipHovered);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'about — muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <div className="
    ABOUT-PAGE
    flex flex-row justify-between gap-11
    min-h-screen
    py-[5.625rem]
    text-[100%]"
    >
      <div className="
      ABOUT-HELLO
      w-[16.25rem]
      pr-8"
      >
        <p className="
        rotate-90
        bg-red-500m
        text-[18.25rem]/[1em] font-bold
        cursor-vertical-text"
        >
          hello
        </p>
      </div>
      <div className="
      ABOUT-IMAGE
      w-full max-w-[22.5rem]"
      >
        <div className="w-[22.5rem] h-[30rem] border">image container</div>
      </div>
      <article className="
      ABOUT-MAIN
      w-full"
      >
        <h1 className="text-5xl italic tracking-[-0.06em] font-medium">about me</h1>
        <section className="
        ABOUT-CONTENT
        flex flex-col gap-5
        leading-relaxed
        mt-10"
        >
          <p>
            Hey, I&#39;m Muhammad Anindyo Poetra Mufatyta, the man who&#39;s secretlyhiding behind
            this website and the device that you use to access it right now (just kidding&#160;
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
                {tooltipHovered && <div className="w-[12rem] px-2 bg-black text-white">i just burst out laughing</div>}
              </div>
            </span>
            ).
            I&#39;m a front-end-focused web developer from the beloved city of Jakarta, Indonesia.
          </p>
          <p>
            Creating a website user interface has been my dream since I was still in Junior
            High School. My curiosity in web development sparked a little when I was taught
            about &#39;web&#39; creation using Blogger in a computer lesson in 2014. I painted that
            moment as a startling epiphany of who I have partially become today. My delight
            towards web development reawakened in the late era (mid-2019) of Senior High School
            when a group of students visited my school to promote their universities. One of the
            student groups exhibited a Computer Science major, in which they demonstrated how a
            website is made and how it can affect people&#39;s lives. By that moment, Computer
            Sciencewas LOCKED IN as my major in higher education. Thankfully, I was able to enroll
            at Universitas Negeri Jakarta, of course, studying Computer Science, and was able to
            learn more about web development, especially the front-end aspect of it.
          </p>
          <p>
            And.... yeahh.... mhmm mhmm..... I graduated in March 2024. Since then, I have kept
            burnishing my front-end web development capability by developing several small
            projects. Right now, I&#39;m also open to any freelance or full-time work
            possibilities to make use of my front-end knowledge. So, any form of connection would
            be a blessing to me. Hope we can meet again!
          </p>
        </section>
      </article>
    </div>
  );
};

export default About;
