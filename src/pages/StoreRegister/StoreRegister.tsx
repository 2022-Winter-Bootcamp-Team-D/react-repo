import React from "react";

import Logo from "../../components/StoreRegister/Logo";
//import RegisterButton from "../../components/CustomerRegister/RegisterButton";
//import RegisterInput from "../../components/CustomerRegister/RegisterInput";
import Input from "../../components/StoreRegister/Input";

function CustomerRegister() {
    document.body.style.backgroundColor = "#FFFBD9";
    return(
    <div>
      <Logo/>
      <Input/>
      </div>);
  }

  export default CustomerRegister;  //import를 하기 위해선 export(내보내기)를 해야 한다