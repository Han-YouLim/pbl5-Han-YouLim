import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/swuImage.png';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
              Upload Video Here And Re-create A Safe Video!
            </h2>
            <div classes='btn btn-primary rounded-0 mr-2'>
              <form>
                <input type="file" style={{backgroundColor:"#969696", opacity:"0.7"}}/>
                <button type="submit">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
