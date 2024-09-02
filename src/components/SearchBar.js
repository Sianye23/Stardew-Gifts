import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState('');
    return <div className="input-wrapper">
    <FaSearch id = "search-icon"></FaSearch>
    <input placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
}