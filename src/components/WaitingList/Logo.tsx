import { Container } from "@material-ui/core";
import React from "react";
import LogoImage from '../../assets/image/LogoImage.png';
import './Logo.scss';
import {
  Link
} from "react-router-dom"; 

function Logo() {
  
  return (
    <div>
      <Link to="/"
        style={{ textDecoration: "none" }}>
        <Container style={{display: 'flex'}}>
            <img src={LogoImage} className='LogoImage'/>
            <div className='LogoText'>
                Waiter
            </div>
        </Container>
      </Link>
    </div>
  );
}

export default Logo;