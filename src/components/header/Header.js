import React from "react";
import './header.css';
const Header = () =>{
    return(
      
      <div className="bg-light-red  br3 pa3 ma2 grow bw2 shadow-5">
          <div style={{positon:'absoulte', height:'75px'}}>
            <h1 className="naslov">{'Robots'}</h1>
            <h3 className="naslov">{'Search your robot by charachter'}</h3>
          </div>
      </div>  
    );
}
export default Header;