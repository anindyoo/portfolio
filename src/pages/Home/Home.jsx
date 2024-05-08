import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
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
