import React from "react";
import LogoImage from '../assets/image/LogoImage.png'
import './CustomerRegister.scss';

function Logo() {
    return(
    <div>
        <img src={LogoImage} className="Logo"/>
        <div className="LogoText">Waiter</div>
    </div>
    )
}
export default Logo;