import React from 'react';

import PhotoBox from './PhotoBox';

const WebDev = () => {
    return (
        <div className="top-div-webDev">
            <h2 className="header-right">WEB DEVELOPMENT</h2>
            <div className='card-container'>
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-wlc.png" description="" title="<a className='a-decoration white' href='https://www.wlcsocialimpact.com' target='_blank' rel='noopener'><i>Women's Leadership Council</i></a> - Built with React, simple static multi-page website. The members page is quite nice. We're considering a bit of a rebrand in 2023, so stay tuned." />
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-arylie.png" description="" title="<a className='a-decoration white' href='https://www.arylie.com' target='_blank' rel='noopener'><i>Arylie</i></a> - Built in Wix, website for the mission-driven coaching practice of Shauwea Hamilton. The website is designed as a walk through a serene birch grove to consider embarking on a journey with Shauwea as a mentor and coach." />
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-readingready.png" description="" title="<a className='a-decoration white' href='https://www.reading-ready.com' target='_blank' rel='noopener'><i>Reading Ready</i></a> - Built in Wix, sales funnel and landing page for the Reading Ready program, an early literacy intervention curriculum developed by Dr. Katie Pace Miles." />
            </div>
        </div>
    );
};

export default WebDev; 