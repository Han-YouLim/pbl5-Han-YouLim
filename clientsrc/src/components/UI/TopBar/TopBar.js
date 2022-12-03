import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              &nbsp;
              <small>+82 (010) 1234 - 5678</small>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              &nbsp;
              <small>hanyoulim @email.com</small>
            </div>
          </div>

          <div className='d-flex pt-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='https://github.com/Han-YouLim' className='text-light'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
