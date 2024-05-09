import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';
import Experiences from '../../components/Experiences/Experiences';

const Home = () => {
  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <>
      <Banner />
      <Projects />
      <Experiences />
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
