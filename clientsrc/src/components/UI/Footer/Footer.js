import React from 'react';

import Link from '../Link/Link';
import {useLocation} from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className='' style={{marginTop:"4rem"}}>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Our team made a system that filters harmful languages and processes them
                  into safer videos using deep learning technology to protect infants and adolescents.
                </small>
              </p>
              {location.pathname == "/upload" ? (
                  <button className='btn btn-sm btn-primary rounded-0'>
                    <a href="/" style={{color: "white", textDecoration:"none"}}>Learn more</a>
                  </button>
              ) : (
                  <Link target='about'>
                    <button className='btn btn-sm btn-primary rounded-0'>
                      Learn more
                    </button>
                  </Link>
              )}
            </div>
          </div>

          {location.pathname == "/upload" ? (
              <></>
          ) : (
              <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
                <div className='footer-title'>
                  <h6>Quick Links</h6>
                </div>
                <div className='footer-content'>
                  <ul className='list-group quick-links'>
                    <li>
                      <Link target='home' offset={-120}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link target='about'>About</Link>
                    </li>
                    <li>
                      <Link target='services'>Service Process</Link>
                    </li>
                    <li>
                      <Link target='blog'>Criteria</Link>
                    </li>
                    <li>
                      <Link target='contact'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
          )}
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  We've revamped our SwearOut web service!
                </small>
              </p>
              <p>
                <small className='text-muted'>
                  We are people who are running towards their respective goals.
                </small>
              </p>
              <p>
                <small className='text-muted'>flor de la vida!</small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : 621 Hwarang-ro, Nowon-gu, Seoul, Republic of Korea</small>
              </p>
              <p className='text-muted'>
                <small>Phone : +82 (010) 1234 - 5678</small>
              </p>
              <p className='text-muted'>
                <small>hanyoulim @email.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://github.com/Han-YouLim' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By Mohamed Azouaoui</small>
      </div>
    </footer>
  );
};

export default Footer;
