import React from 'react';

import Section from '../../../HOC/Section';
import contactImage from "../../../assets/img/contact.jpeg";
import aboutImage from "../../../assets/img/about.jpg";
import bgImage from "../../../assets/img/home_bg.jpg";

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Contact </span>Us
          </h3>
        </div>
        <div
            className='contact-content2 text-center'>
          <img src={contactImage} alt='contact image' />
        </div>
        <div style={{textAlign: "center", marginTop: "16px"}}>
          <h6>Contact us via email!</h6>
        </div>
      </div>
    </Section>
  );
};

export default contact;
