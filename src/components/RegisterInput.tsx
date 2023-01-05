import React from "react";
import LogoImage from '../../assets/image/LogoImage.png'
import './CustomerRegister.scss';

function Logo() {
    return(
    <div>
        <img src={LogoImage} className="Logo"/>
    </div>
    )
}
export default Logo;