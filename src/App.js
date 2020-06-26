import React from 'react';
import './App.css';
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Profile from "./Components/Navbar/Profile";

const PAGES = {
    home: <Home/>,
    about: <About/>,
    profile: <Profile/>
}

class App extends React.Component {

    state = {currentPage: 'home'}

    navigateTo = (page) => {
        this.setState({currentPage: page})
    }

    render() {
        return (
            <header>
                <div className='title'></div>
                <nav className='menu'>
                    <ul>
                        <li>
                            <button onClick={() => {
                                this.navigateTo('home')
                            }}>Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.navigateTo('about')
                            }}>About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.navigateTo('profile')
                            }}>Profile
                            </button>
                        </li>
                    </ul>
                </nav>
                <main>
                    <section>{PAGES[this.state.currentPage]}</section>
                </main>
            </header>

        );
    }

}

export default App;
