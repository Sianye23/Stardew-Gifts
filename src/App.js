import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { DetailsPage } from "./components/DetailsPage";

function App() {
    const [results, setResults] = useState([]);

    return (
        <Router>
            <div className="App">
                <div className="search-bar-container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <SearchBar setResults={setResults} />
                                    <SearchResults results={results} />
                                </>
                            }
                        />
                        <Route path="/details" element={<DetailsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
