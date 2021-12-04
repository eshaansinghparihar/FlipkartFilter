import React from "react";
import './Header.css';

function Header(){
return(
    <div className="header">
            <a href="https://www.flipkart.com/"><img height="30px" width="30px" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png" alt="Flipkart" title="Flipkart" className="headerText"/></a>
            <input type="text" placeholder="Search for products,brands and more"></input>
            <a href="https://www.flipkart.com/"><button className="headerTextRight" >Login</button></a>
    </div>
)

}
export default Header;