import React from 'react';

import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services Process
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;1. Upload Video</h5>
                  <p className='service-description'>
                    Users upload videos from this webpage that may contain harmful languages.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;2. Extract video voice</h5>
                  <p className='service-description'>
                    The voice is extracted from the video uploaded by the user.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;3. Convert video voice to text</h5>
                  <p className='service-description'>
                    It converts the extracted voice into text through Naver Clova api.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;4. Data processing</h5>
                  <p className='service-description'>
                    Data preprocessing is performed before identifying whether there is abusive language in the text.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;5. Recognize harmful languages</h5>
                  <p className='service-description'>
                   CNN has been adopted to facilitate morpheme-level analysis more quickly and accurately
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-body'>
                  <h5 className='service-title'>&nbsp;&nbsp;&nbsp;6. Reprocessing video</h5>
                  <p className='service-description'>
                    The part with swear words is muted and reprocessed into a video. The user may download the video.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
