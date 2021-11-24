import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h2 className="partOfSpeech">{props.meaning.partOfSpeech}</h2>
            {props.meaning.definitions.map(function (definition,index){
                return(
                    <div key={index}>
                        <p> {definition.definition}
                            <br />
                        <em>{definition.example}</em></p>
                    </div>
                );
            })}
            
        </div>
    );
}