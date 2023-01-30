import React from "react";

import Logo from "../../components/CustomerRegister/Logo";
import StoreRegisterInput from "../../components/StoreRegister/StoreRegisterInput";

function StoreRegister() {
    document.body.style.backgroundColor = "#FFFBD9";
    return(
      <div>
        <Logo/>
        <StoreRegisterInput/>
      </div>);
  }

  export default StoreRegister; 