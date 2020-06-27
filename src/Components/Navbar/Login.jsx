import React from "react";
import '../../App.css';
import App, {PAGES} from "../../App";



const Login = () => {

    return (
        <div>
        <form>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' name='email' size='28'/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' name='password' size='28'/>
            <button type='submit' onClick={() => {this.navigateTo('map')}}>Войти</button>
        </form>

        </div>

    )
}


export default Login;


