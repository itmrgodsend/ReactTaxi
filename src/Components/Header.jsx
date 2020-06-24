import React from "react";
import '../App.css';

const Header = () => {
    return (
        <div className='Header'>

            <div className='title'></div>
            <span className='menu'>
                <a className='text' href="#">Карта</a>
                <a className='text' href="#">Профиль</a>
                <a className='text' href="#">Логин</a>
            </span>
        </div>
    )
}



export default Header;