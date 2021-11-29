import React from "react";

export default function Synonyms(props) {
    if(props.sinonim){
    return (
        <div className="Synonyms">
            <strong>Synonyms:</strong>
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