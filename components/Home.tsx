import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Process from './Process';
import Experts from './Experts';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Booking from './Booking';
import Faq from './Faq';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Experts />
      <Portfolio />
      <Contact />
      {/* <Booking /> */}
      <Faq />
    </main>
  );
};

export default Home;

