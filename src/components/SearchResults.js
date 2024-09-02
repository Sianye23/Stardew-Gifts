import React from 'react';
import "./SearchResults.css";
import {SearchResult} from "./SearchResult";

export const SearchResults = ({ results }) => { // Assuming results are passed as a prop
    return (
        <div className='search-results'>
            {results.map((result, id) => {
                return <SearchResult result={result.Gift} key={id}></SearchResult>
            })}
        </div>
    );
};
