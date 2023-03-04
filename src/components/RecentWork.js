import React, { useState } from 'react';

import PhotoBox from './PhotoBox';

const RecentWork = () => {
    return (
        <div className="top-div-recentWork">
            <h2 className="header-left">RECENT WORK</h2>
            <div className='card-container'>
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-egungun-blue.png" description="" title="Egungun Costume in Blue for <i>Omar</i>, composed by Rhiannon Giddens & Michael Abels, directed by Kaneza Schaal. Worn by Kiara Benn." />
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-cami-miami.png" description="" title="Performance dress for Christopher Myers' <i>Let The Mermaids Flirt with Me</i> (2022) at Art Basel Miami. Worn by Camila Ortiz." />
                <PhotoBox photo="https://jhgfyi.s3.amazonaws.com/website-egungun-skirt.png" description="" title="Egungun Skirt for <i>KLII</i>, directed by Kaneza Schaal. Worn by Kaneza Schaal." />
            </div>
        </div>
    );
};

export default RecentWork; 