import React, {useState} from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");
    function handleResponse(reponse) {
        console.log(reponse);
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

        </div>
    );
}