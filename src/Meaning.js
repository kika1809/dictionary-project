import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h2 className="partOfSpeech">{props.meaning.partOfSpeech}</h2>
            {props.meaning.definitions.map(function (definition,index){
                return(
                    <div key={index}>
                        <p> <strong>Definition:</strong>
                            <br />
                            {definition.definition}
                            <br />
                            <strong>Example:</strong>
                            <br />
                            <em>{definition.example}</em>
                            <br />
                            <Synonyms sinonim={definition.synonyms} />
                        </p>
                    </div>
                );
            })}
            
        </div>
    );
}