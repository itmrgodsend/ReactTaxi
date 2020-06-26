import React from "react";
import '../../App.css';

const Home = () => {
    return (
        <form>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' name='email' size='28'/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' name='password' size='28'/>
        </form>
    )
}


export default Home;


