import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
    if (props.phonetics.audio) {
        return (
        <div className="Phonetics">
                <ReactAudioPlayer
                    src={props.phonetics.audio}
                    volume={0.3}
                    controls
                />
                <p className="mb-0 text">/{props.phonetics.text}/</p>
                
        </div>
    );
    }
    else {
        return (
        <div className="Phonetics">
                <p className="mb-0 text">/{props.phonetics.text}/</p>
        </div>
    );
    }

    
}