import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
    if (props.inform) {
        return (
            <div className="Results">
                <section>
                <h1>{props.inform.word}</h1>
                {props.inform.phonetics.map(function (phonetics, index) {
                    return (
                        <div key={index}>
                           <Phonetics phonetics={phonetics} />
                        </div>
                    );
                })}
                </section>
                {props.inform.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                           <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            
            </div>
        );
    }
    else {
        return null;
    }
   
}