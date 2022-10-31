import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Blog />
      <Facts />
      <Contact />
    </Fragment>
  );
};

export default sections;
