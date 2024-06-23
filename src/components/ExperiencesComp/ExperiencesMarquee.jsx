import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { Draggable } from 'gsap/all';
import SkewedCard from '../SkewedCard/SkewedCard';
import ExperiencesTitle from './ExperiencesTitle';
import StrecthedStrings from '../StretchedString/StretchedString';
import helpers from '../../helpers/helpers';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

gsap.registerPlugin(Draggable);

const animateMarquee = (element, className, direction, duration) => {
  const count = 4;
  const elementWidth = element?.clientWidth;
  const widthTotal = elementWidth * count;

  gsap.set(className, {
    x: (i) => i * elementWidth,
  });

  const animation = gsap.to(className, {
    // paused: true,
    duration,
    ease: 'none',
    x: `${direction}=${widthTotal}`,
    modifiers: {
      x: gsap.utils.unitize((x) => (
        direction === '+'
          ? parseFloat(x) % (widthTotal)
          : ((parseFloat(x) - (widthTotal)) % (widthTotal)) + (widthTotal))),
    },
    repeat: -1,
    // paused: true,
  });

  // Draggable.create('.SKEWED-CARD', {
  //   type: 'x',
  //   trigger: '.SKEWED-CARD',
  //   onDrag: (self) => {
  //     const dragAmount = Math.min(Math.max(self.x, 0), element.clientWidth * 4);
  //     const animationProgress = dragAmount / (element.clientWidth * 4);
  //     animation.progress(animationProgress);
  //   },
  // })

  return animation
};

const ExperiencesMarquee = (props) => {
  const { experiences } = props;

  const [expCardsW, setExpCardsW] = useState(0);
  const [expCardsH, setExpCardsH] = useState(0);

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const laptopBreakpoint = config.screenBreakpoints.laptop;

  useEffect(() => {
    const cardElement = experiences && document.querySelector('.SKEWED-CARD');
    const titleElement = experiences && document.querySelector('.EXPERIENCES-TITLE');

    setExpCardsW(cardElement?.clientWidth);
    setExpCardsH(cardElement?.clientHeight);

    const cardMarquee = experiences && animateMarquee(cardElement, '.SKEWED-CARD', '+', 20);
    const titleMarquee = experiences && animateMarquee(titleElement, '.EXPERIENCES-TITLE', '-', 40);

    return () => {
      cardMarquee.kill();
      titleMarquee.kill();
    }
  }, [experiences, screenWidth]);

  return (
    <section className="
    EXPERIENCES-SECTION
    flex flex-col justify-center
    relative
    h-[calc(100vh-300px)] lg:h-screen"
    >
      <div className="
      EXPERIENCES-TITLE-ABS-WRAPPER
      absolute
      top-60"
      >
        <div className="
        EXPERIENCES-TITLE-CONTAINER
        relative
        flex
        mx-[-28px]
        text-xl
        w-[20rem] lg:w-[calc(100vw-20px)]"
        >
          <div
            className="
            EXPERIENCES-TITLES
            relative
            flex items-center"
            style={{
              height: screenWidth >= laptopBreakpoint ? expCardsH * 0.8 : 0,
              right: screenWidth >= laptopBreakpoint ? expCardsW : expCardsW * 2,
            }}
          >
            {experiences.map((exp, index) => (
              <ExperiencesTitle
                key={`exp-title-${exp?.id}`}
                isOdd={(index + 1) % 2 === 1}
              />
            ))}
            {experiences.length % 2 !== 0 && (
              <ExperiencesTitle
                key="title-buffer-exp"
                isOdd={false}
              />
            )}
          </div>
        </div>
      </div>
      <div className="
      EXPERIENCES-CARD-CONTAINER
      relative
      flex
      mx-[-28px]
      overflow-hidden"
      >
        <div
          className="
          EXPERIENCES-CARDS
          relative
          flex items-center
          mb-20"
          style={{
            height: expCardsH * 1.8,
            left: -expCardsW,
          }}
        >
          {experiences.map((exp, index) => (
            <SkewedCard
              key={exp.id}
              id={exp.id}
              expRole={exp.role}
              date={helpers.formatDateRange(exp.startDate, exp.endDate)}
              company={exp.company}
              isOdd={(index + 1) % 2 === 1}
            />
          ))}
          {experiences.length % 2 !== 0 && (
            <SkewedCard
              key="buffer-exp"
              expRole="experiences"
              buffer
            />
          )}
        </div>
      </div>
      <div className="
      EXPERIENCES-STRETCHED-STRINGS-CONTAINER
      flex justify-center
      text-center"
      >
        <div className="absolute lg:static bottom-28">
          <StrecthedStrings
            text="see more experiences"
            link="/experiences"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencesMarquee;
