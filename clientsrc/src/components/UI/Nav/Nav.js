import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import Link2 from '../Link/Link2'
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  useEffect(()=>{
    console.log(location)
  }, [location])
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container' >
            <a className='navbar-brand' href='/'>
              <span>SwearOut!</span>
              <i className='fas fa-circle ml-1' />
            </a>
            <div
                className={`navbar-toggler nav-icon ${(() => {
                  if (toggeledNav) return 'open';
                  return '';
                })()}`}
                onClick={toggleNav}
            >
            </div>
        <span />
        <span />
        <span />
        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          {
            location.pathname === "/upload"? (
                <></>
            ):(
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link target='home' offset={-120} classes='nav-link'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link target='about' classes='nav-link'>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link target='services' classes='nav-link'>
                      Service Process
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link target='blog' classes='nav-link'>
                      Criteria
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link target='contact' classes='nav-link'>
                      Contact
                    </Link>
                  </li>
                </ul>
            )
          }

        </div>
      </div>
    </nav>
  );
};

export default Nav;
