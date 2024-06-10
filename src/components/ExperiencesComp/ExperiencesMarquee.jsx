import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { Draggable } from 'gsap/all';
import SkewedCard from '../SkewedCard/SkewedCard';
import ExperiencesTitle from './ExperiencesTitle';
import StrecthedStrings from '../StretchedString/StretchedString';

gsap.registerPlugin(Draggable);

const animateMarquee = (element, className, direction, duration) => {
  const count = 4;
  const elementWidth = element.clientWidth;
  const widthTotal = elementWidth * count;

  gsap.set(className, {
    x: (i) => i * elementWidth,
  });

  const animation = gsap.to(className, {
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

const ExperiencesMarquee = () => {
  const [expCardsW, setExpCardsW] = useState(0);
  const [expCardsH, setExpCardsH] = useState(0);

  useEffect(() => {
    const cardElement = document.querySelector('.SKEWED-CARD');
    const titleElement = document.querySelector('.EXPERIENCES-TITLE');

    setExpCardsW(cardElement.clientWidth);
    setExpCardsH(cardElement.clientHeight);

    const cardMarquee = animateMarquee(cardElement, '.SKEWED-CARD', '+', 20);
    const titleMarquee = animateMarquee(titleElement, '.EXPERIENCES-TITLE', '-', 40);

    return () => {
      cardMarquee.kill();
      titleMarquee.kill();
    }
  }, []);

  return (
    <section className="
      EXPERIENCES-SECTION
      flex flex-col justify-center
      relative
      h-screen"
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
        w-[calc(100vw-20px)]
        overflow-hidden"
        >
          <div
            className="
            EXPERIENCES-TITLES
            relative
            flex items-center"
            style={{
              height: expCardsH * 0.8,
              right: expCardsW,
            }}
          >
            {[1, 2, 3, 4].map((card, index) => (
              <ExperiencesTitle
                key={card}
                isOdd={(index + 1) % 2 === 1}
              />
            ))}
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
          flex items-center"
          style={{
            height: expCardsH * 1.8,
            left: -expCardsW,
          }}
        >
          {[1, 2, 3, 4].map((card, index) => (
            <SkewedCard
              key={card}
              desc={card}
              isOdd={(index + 1) % 2 === 1}
            />
          ))}
        </div>
      </div>
      <StrecthedStrings
        text="see more experiences"
        link="/experiences"
      />
    </section>
  );
};

export default ExperiencesMarquee;
