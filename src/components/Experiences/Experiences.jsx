import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { Draggable } from 'gsap/all';
import SkewedCard from '../SkewedCard/SkewedCard';

gsap.registerPlugin(Draggable);

const animateMarquee = (element) => {
  gsap.set('.SKEWED-CARD', {
    x: (i) => i * element.clientWidth,
  });

  const animation = gsap.to('.SKEWED-CARD', {
    duration: 20,
    ease: 'none',
    x: `+=${element.clientWidth * 4}`,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (element.clientWidth * 4)),
    },
    repeat: -1,
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

const Experiences = () => {
  const [expCardsW, setExpCardsW] = useState(0);
  // const ref = useRef(null);

  useEffect(() => {
    const experiencesCards = document.querySelector('.EXPERIENCES-CARDS');
    const cardElement = document.querySelector('.SKEWED-CARD');

    setExpCardsW(cardElement.clientWidth);

    // console.log(cardElement);

    const cardMarquee = animateMarquee(cardElement);
    experiencesCards.addEventListener('onmouseenter', () => cardMarquee.pause());

    return () => cardMarquee.kill()
  }, []);

  return (
    <section className="
      EXPERIENCES-SECTION
      flex flex-col justify-center
      h-screen"
    >
      <div className="EXPERIENCES-TITLE">
        <span>EXPERIENCES</span>
      </div>
      <div className="
      EXPERIENCES-CARD-CONTAINER
      border border-blue-700
      relative
      max-w-[100vw] h-40
      mx-[-28px]
      overflow-hidden"
      >
        <div
          className="
          EXPERIENCES-CARDS
          relative"
          style={{
            left: -expCardsW,
            // left: 222,
          }}
        >
          {[1, 2, 3, 4].map((card) => (
            <SkewedCard
              key={card}
              desc={card}
            />
          ))}
        </div>
      </div>
      <div className="EXPERIENCES-TITLE">
        <span>EXPERIENCES</span>
      </div>
    </section>
  );
};

export default Experiences;
