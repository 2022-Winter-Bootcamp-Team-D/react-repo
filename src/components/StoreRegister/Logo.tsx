import LogoImage from './src/assets/image/LogoImage.png';
import { Container } from "@material-ui/core";
import React from "react";


function Logo() {
  return (
    <Container style={{display: 'flex'}}>
        <img src={LogoImage} className='LogoImage'/>
    </Container>

  );
}

export default Logo;