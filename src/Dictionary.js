import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("dictionary");
    const [info, setInfo] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setInfo(response.data[0]);
    }
    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiURL).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();   
    }
    function load() {
        setLoaded(true);
        search();
    }

    function handleSearch(event) {
        setWord(event.target.value);
    }
    if(loaded){
    return (
        <div className="Dictionary">
            <section className="search">
                <h1 className="what">
                    What word do you want to look up?
                </h1>
            <form onSubmit={handleSubmit}>
                <input type="search" defaultValue={word} onChange={handleSearch} />
                </form>
                <div className="hint">
                    Examples: sunset, yoga, wine, plant,...
                </div>
            </section>
            <Results inform={info}/>
        </div>
        );
    }
    else {
        load();
        return "Loading";
        
    }
}