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

  export default CustomerRegister;