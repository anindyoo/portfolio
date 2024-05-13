import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';
import Experiences from '../../components/Experiences/Experiences';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <>
      <Banner />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
};

export default Home;
