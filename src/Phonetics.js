import React from "react";
export default function Phonetics(props) {
    
    return (
        <div className="Phonetics">
            <p className="mb-0">/{props.phonetics.text}/</p>
            <audio controls>
                <source src={props.phonetics.audio} type="audio/mp3" />
                <p>Your browser doesn't support HTML5 audio. Here is
                    a <a href={props.phonetics.audio}target="_blank" rel="noreferrer">link to the audio</a> instead.</p>
            </audio>
           

        </div>
    );
}