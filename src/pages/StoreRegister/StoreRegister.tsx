import React from "react";

import Logo from "../../components/Logo";
import RegisterInput from "../../components/RegisterInput";

function StoreRegister() {
    document.body.style.backgroundColor = "#FFFBD9";
    return(
      <div>
        <Logo/>
        <RegisterInput/>
      </div>);
  }

  export default StoreRegister;  //import를 하기 위해선 export(내보내기)를 해야 한다