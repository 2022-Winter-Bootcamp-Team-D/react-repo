import React from "react";
import LogoImage from '../../assets/image/LogoImage.png'; //이미지 불러오기



function Logo() {
  return (
  <div>
    <img src={LogoImage} className="Logo"/>
    <div className="LogeImage">Waiter</div>
  </div>
  );
}

export default Logo;