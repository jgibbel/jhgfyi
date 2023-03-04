import React, { useState } from 'react';
import parse from 'html-react-parser';

const PhotoBox= ({photo, description, title}) => {
    return (
            <div className="img-container">
            <img className="card-img" src={photo} alt={description} />
            <p className="card-text">{parse(`${title}`)}</p>
            </div>
    );
};

export default PhotoBox; 