import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>About </span>Us
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <div className='about-description'>
                <h3>We are</h3>
                <p>
                  A team of students who belong to SEOUL WOMEN’S UNIVERSITY located in Seoul, Korea.
                </p>
                <p>
                  Students in Department of Information Security.
                </p>
                <h3>For what</h3>
                <p>
                  Our team made a system that filters harmful languages and processes them
                  into safer videos using deep learning technology to protect infants and adolescents.
                </p>
                <p>
                  This service awakens awareness of harmful languages in the video and suggests a way to solve them.
                  The goal is to process all sentences with meanings containing inappropriate expressions,
                  and the target language is limited to Korean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
