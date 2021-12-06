import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("dictionary");
    const [info, setInfo] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        setInfo(response.data[0]);
    }
    function handlePexelResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }
    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiURL).then(handleResponse);

        let pexelAPI = "563492ad6f91700001000001db1543f648eb42d7abceeb270345393c";
        let pexelURL = `https://api.pexels.com/v1/search?query=${word}&per_page=3`;
        let header = { Authorization: `Bearer ${pexelAPI}` };
        axios.get(pexelURL, { headers: header }).then(handlePexelResponse);
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
            <Results inform={info} />
            <Photos photos={photos}/>
        </div>
        );
    }
    else {
        load();
        return "Loading";
        
    }
}