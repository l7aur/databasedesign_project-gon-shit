import React from "react";
import '../csses/Menu.css'
import {ReactComponent as Image1} from '../images/bosses.svg';
import {ReactComponent as Image2} from '../images/weapons.svg';
import {ReactComponent as Image3} from '../images/armor.svg';
import {ReactComponent as Image4} from '../images/spells.svg';
import {ReactComponent as Image5} from '../images/incantations.svg';
import {ReactComponent as Image6} from '../images/characters.svg';
import {Link} from "react-router-dom";

const Picture  = () => {

    return (
        <div className="container">
            <div>
                <div className="image-container">
                    <Link to="/BossPage">
                        <div className="image-item">
                            <Image1/>
                        </div>
                    </Link>
                    <Link to="/WeaponPage">
                        <div className="image-item">
                            <Image2/>
                        </div>
                    </Link>

                    <Link to="/ArmorPage">
                        <div className="image-item">
                            <Image3/>
                        </div>
                    </Link>

                    <Link to="/SorceryPage">
                        <div className="image-item">
                            <Image4/>
                        </div>
                    </Link>
                    <Link to="/IncantationPage">
                        <div className="image-item">
                            <Image5/>
                        </div>
                    </Link>
                    <Link to="/CharacterPage">
                        <div className="image-item">
                            <Image6/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Picture;