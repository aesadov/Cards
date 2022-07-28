import React from 'react';
import error from '../assets/404-error-page-not-found.jpg'

export const Error404 = () => {
    return (
        <div>
            <img style={{maxWidth: '100%', maxHeight: '100vh'}} src={error} alt="not found"/>
        </div>
    );
};

