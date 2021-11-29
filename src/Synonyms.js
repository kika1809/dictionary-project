import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
    if(props.sinonim){
    return (
        <div className="Synonyms">
            <ul>
            {props.sinonim.map(function (sinonim, index) {
                return (
                    <li key={index}>
                        {sinonim}
                    </li>
                );
            })
            }
            </ul>
        </div>
        );
    }
    else { return null;}
}