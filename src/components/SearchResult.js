import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        const gift = (result.Gift).replace(" ", "_");
        navigate(`/${gift}`, { state: result });
    }

    return (
        <div
            className="search-result"
            onClick={handleClick}>
            {result.Gift}
        </div>
    );
};