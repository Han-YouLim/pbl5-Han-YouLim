import React from 'react';

import Section from '../../../HOC/Section';

import blogImage1 from '../../../assets/img/blog1.jpg';
import blogImage2 from '../../../assets/img/blog2.jpg';
import blogImage3 from '../../../assets/img/blog3.jpg';

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Harmful Language Identification Criteria
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Swear word</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>An expression that causes sexual discomfort</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>An intentional expression of character</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
