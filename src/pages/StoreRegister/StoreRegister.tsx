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

  export default StoreRegister;  //import를 하기 위해선 export(내보내기)를 해야 한다