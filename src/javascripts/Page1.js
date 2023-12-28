import React from "react";
import '../csses/Menu.css';
import Menu from "./Menu";
import videoBackground from '../vods/bgVideo.mp4'

const Page1 = () => {
    return (
        <body>
        <div className="App">
            <header></header>
            <video className="video-background" autoPlay loop muted>
                <source src={videoBackground} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <Menu/>
        </div>

        <footer></footer>
        </body>
    );
};
export default Page1;


