import React, {useEffect, useState} from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/swuImage.png';
import axios from 'axios';
import {Link} from "react-router-dom";

const uploadHome = () => {

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
                            Download Your Video Here!
                        </h2>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default uploadHome;
