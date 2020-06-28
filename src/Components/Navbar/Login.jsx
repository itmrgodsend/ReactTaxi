import React from "react";
import '../../App.css';
import App from "../../App";



const Login = (props) => {
    const {navigateTo} = props;

    return (
        <div>
        <form>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' name='email' size='28'/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' name='password' size='28'/>
            <button type='submit' onClick={() => {navigateTo('map')}}>Войти</button>
        </form>

        </div>

    )
}


export default Login;


