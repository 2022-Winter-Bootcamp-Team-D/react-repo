import React from "react";

import Logo from "../../components/CustomerRegister/Logo";
import RegisterInput from "../../components/CustomerRegister/RegisterInput";

function CustomerRegister() {
    document.body.style.backgroundColor = "#FFFBD9";
    return(
      <div>
        <Logo/>
        <RegisterInput/>
      </div>);
  }

  export default CustomerRegister;  //import를 하기 위해선 export(내보내기)를 해야 한다