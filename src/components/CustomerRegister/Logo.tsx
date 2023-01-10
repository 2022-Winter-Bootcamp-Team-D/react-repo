import React from "react";
<<<<<<< HEAD:src/components/CustomerRegister/Logo.tsx
import LogoImage from '../../assets/image/LogoImage.png' //이미지 불러오기 위함
import './CustomerRegister.scss'; //작성한 css가 Logo페이지와 연결되기 위해 import 진행
=======
import LogoImage from '../assets/image/LogoImage.png' //이미지 불러오기 위함
import './StoreRegister.scss'; //작성한 css가 Logo페이지와 연결되기 위해 import 진행
>>>>>>> develop:src/components/Logo.tsx

function Logo() {
    return(
    <div>
        <img src={LogoImage} className="Logo"/>
        <div className="LogoText">Waiter</div>
    </div>
    );
};
export default Logo;