import { Container } from "@material-ui/core";
import React from "react";
import LogoImage from '../../assets/image/LogoImage.png';
import './Logo.scss';

function SubButton() {
  
  return (
    <Container style={{display: 'flex'}}>
        <img src={LogoImage} className='LogoImage'/>
        <div className='LogoText'>
            Waiter
        </div>
    </Container>
  );
}

export default SubButton;