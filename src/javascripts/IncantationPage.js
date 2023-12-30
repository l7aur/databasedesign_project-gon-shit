import React from 'react';
import HomeButton from "./HomeButton";
import videoBackground from "../vods/bgVideo.mp4";

const IncantationPage = () => {
    return (
        <body>
        <header><HomeButton/></header>
        <div className="App">
            <h1>This is the incantation page </h1>
            <video className="video-background" autoPlay loop muted>
                <source src={videoBackground} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <footer></footer>
        </div>

        <footer></footer>
        </body>
    );
};

export default IncantationPage;