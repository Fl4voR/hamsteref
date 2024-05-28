import React from "react";
import Button from "../button/button";

const Header = () => {
    const tg =  window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
      }
    
    return (


        
      <div className={"Header"}>
        <button onClick={onClose}>Закрыть</button>
        <span className={"username"}>
            {tg.initDateUnsafe?.user?.username}
        </span>

      </div>

        
    );
};

export default Button;