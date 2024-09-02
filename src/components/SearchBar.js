import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
import giftsData from "./gifts.json";

export const SearchBar = () => {

    const [input, setInput] = useState('');

    const handleChange = (value) => {
        setInput(value);
        const results = giftsData.filter((giftsData) => {
            return value && giftsData && giftsData.Gift && giftsData.Gift.toLowerCase().includes(value);
        })
        console.log(results);
    }

    return <div className="input-wrapper">
    <FaSearch id = "search-icon"></FaSearch>
    <input placeholder="Type here..."
           value={input}
           onChange={(e) => handleChange(e.target.value)}
    />
    </div>
}