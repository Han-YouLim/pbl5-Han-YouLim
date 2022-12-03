import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/facts_bg.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <h4 className='facts-counter text-light'>&nbsp;&nbsp;&nbsp;</h4>
              <h5 className='facts-title text-light'>&nbsp;&nbsp;&nbsp;</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <h4 className='facts-counter text-light'>&nbsp;&nbsp;&nbsp;</h4>
              <h5 className='facts-title text-light'>&nbsp;&nbsp;&nbsp;</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <h4 className='facts-counter text-light'>&nbsp;&nbsp;&nbsp;</h4>
              <h5 className='facts-title text-light'>&nbsp;&nbsp;&nbsp;</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <h4 className='facts-counter text-light'>&nbsp;&nbsp;&nbsp;</h4>
              <h5 className='facts-title text-light'>&nbsp;&nbsp;&nbsp;</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
