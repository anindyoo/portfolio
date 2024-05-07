import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';

gsap.registerPlugin(ScrollTrigger);

const pinLogo = () => {
  const pinElement = document.querySelector('.NAME-BANNER-LOGO');
  const trigger = ScrollTrigger.create({
    trigger: '.NAME-BANNER-LOGO',
    start: 'top top',
    end: 'max',
    pin: true,
    scrub: true,
    pinSpacing: false,
    id: 'namePin',
    markers: true,
    onUpdate: (self) => {
      const { progress } = self;

      const screenHeigth = window.innerHeight;

      const scallingFactor = screenHeigth / pinElement.clientHeight;
      const adjustedProgress = Math.min(progress * scallingFactor, 1);

      const targetFontSize = gsap.utils.interpolate(128, 24, adjustedProgress);
      const targetLetterSpacing = gsap.utils.interpolate(-0.025, -0.08, adjustedProgress);
      const targetTop = gsap.utils.interpolate(0, 20, adjustedProgress);

      gsap.to('.NAME-BANNER-LOGO', {
        top: progress === 0 ? 0 : `${targetTop}`,
        fontSize: progress === 0 ? '128px' : `${targetFontSize}px`,
        letterSpacing: progress === 0 ? '-0.025em' : `${targetLetterSpacing}em`,
        duration: 0,
      });
    },
  });
  return trigger;
};

const Home = () => {
  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
  }, []);

  useEffect(() => {
    const triggerPinLogo = pinLogo();

    return () => {
      triggerPinLogo.kill()
    };
  }, []);

  return (
    <>
      <Banner />
      <Projects />
      <section className="
      EXPERIENCES-SECTION
      h-screen"
      >
        EXPERIENCES SECTION
      </section>
      <section className="
      ABOUT-SECTION
      h-screen"
      >
        ABOUT SECTION
      </section>
    </>
  );
};

export default Home;
