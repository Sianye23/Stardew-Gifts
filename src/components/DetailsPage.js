import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

export const DetailsPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const title = params.get('Gift');
    const otherInfo = params.get('Loves'); // replace with actual keys

    return (
        <div>
            <h1>{title}</h1>
            <p>{otherInfo}</p>
        </div>
    );
};
