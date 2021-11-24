import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");
    const [info, setInfo] = useState(null)

    function handleResponse(response) {
        setInfo(response.data[0]);
    }
    
    function search(event) {
        event.preventDefault();
        
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleSearch(event) {
        setWord(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleSearch}/>
            </form>
            <Results inform={info}/>
        </div>
    );
}