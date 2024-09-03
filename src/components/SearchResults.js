import React from 'react';
import "./SearchResults.css";
import {SearchResult} from "./SearchResult";

export const SearchResults = ({ results }) => { // Assuming results are passed as a prop
    return (
        <div className='search-results'>
            {results.map((result, id) => {
                console.log(result);
                return <SearchResult result={result} key={id}></SearchResult>
            })}
        </div>
    );
};
