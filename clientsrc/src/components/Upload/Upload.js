import {Fragment} from "react";
import React, { useEffect, useState } from 'react';
import bgImage from "../../assets/img/swuImage.png";
import Section from '../../HOC/Section';
import downloadIcon from "../../assets/icon/download.png";

const Upload = () => {
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        setTimeout(function() {
           setloading(false) ;
        }, 3000);
    }, [])

    return(
        <Fragment>
            <main>
                <Section id='upload'>
                    <div>
                        <div className='upload-content p-5' style={{backgroundImage: `url(${bgImage})`}}>
                            <div className='intro container text-center text-light'>
                                <h1 className='title'>WELCOME</h1>
                                <h2 className='sub-title mb-4'>
                                    Download Video Here!
                                </h2>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id='uploadResult'>
                    <div className='container pt-2 pb-5'>
                        <div className='section-header pt-5 pb-5 text-center'>
                            <h3 className='section-title'>
                                <span>Video Processing</span> Result
                            </h3>
                        </div>
                        {
                            loading? (
                                    <div className="skeleton">
                                        <div className="skeleton-thumbnail"></div>
                                        <div className="skeleton-text"></div>
                                    </div>
                            ):(
                                <div className='section-content'>
                                    <div className='col'>
                                        <div className='col-md-12 col-lg-6 mb-3'>
                                            <button className='downloadIcon'>
                                                <img src={downloadIcon} alt='download' />
                                            </button>
                                        </div>
                                        <div style={{marginLeft: "420px"}}>
                                            <h4 style={{color: "#6f6f6f"}}>Click this Button and download your video</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Section>
            </main>


        </Fragment>


    )
}

export default Upload;