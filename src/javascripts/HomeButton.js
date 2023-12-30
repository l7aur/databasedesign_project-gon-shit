import React from "react";
import {Link} from "react-router-dom";
import '../csses/HomeButton.css'
const HomeButton = () => {
    return(
        <Link to={"/"}>
            <button className={"transparentButton"}>Home Page</button>
        </Link>
    );
};
export default HomeButton;
