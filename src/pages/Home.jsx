import React from 'react';
import Hero from '../components/Hero';
import Subsidy from '../components/Subsidy';
import Services from '../components/Services';
import ProjectSlider from '../components/ProjectSlider';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Subsidy />
      <Services />
      <ProjectSlider />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
