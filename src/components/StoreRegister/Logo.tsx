import React from "react";
import LogoImage from '../../assets/image/LogoImage.png'; //이미지 불러오기
import './Logo.scss';

function Logo() {
  return (
  <div>
    <img src={LogoImage} className="Logo"/>
    <div className="LogoText">Waiter</div>
  </div>
  );
}

export default Logo;