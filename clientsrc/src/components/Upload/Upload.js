import {Fragment} from "react";
import React from 'react';
import bgImage from "../../assets/img/swuImage.png";
import Section from '../../HOC/Section';

const Upload = () => {
    return(
        <Fragment>
            <main>
                <Section id='upload'>
                    <div>
                        <div
                            className='upload-content p-5'
                            style={{backgroundImage: `url(${bgImage})`}}
                        >
                            <div className='intro container text-center text-light'>
                                <h1 className='title'>WELCOME</h1>
                                <h2 className='sub-title mb-4'>
                                    Upload Video Here And Re-create A Safe Video!
                                </h2>
                                <div classes='btn btn-primary rounded-0 mr-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>


        </Fragment>


    )
}

export default Upload;