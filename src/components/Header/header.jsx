import React from "react";
import Button from "../button/button";
import Button from "../hoooks/useTelegram";

const Header = () => {

    
    const  {user,onClose} = useTelegram();

    return (


        
      <div className={"Header"}>
        <button onClick={onClose}>Закрыть</button>
        <span className={"username"}>
            {user.username}
        </span>

      </div>

        
    );
};

export default Header;