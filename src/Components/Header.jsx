import React from "react";
import '../App.css';

const Header = () => {
    return (
        <div className='Header'>

            <div className='title'></div>
            <ul className="menu">
                <li><a href="#">Карта</a></li>
                <li><a href="#">Профиль</a></li>
                <li><a href="#">Логин</a></li>
            </ul>
        </div>
    )
}



export default Header;