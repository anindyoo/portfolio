import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';
import Experiences from '../../components/Experiences/Experiences';
import About from '../../components/About/About';

const Home = () => {
  useEffect(() => {
    document.title = 'home - muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <>
      <Banner />
      <Projects />
      <Experiences />
      <About />
    </>
  );
};

export default Home;
