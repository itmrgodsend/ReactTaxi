import React from 'react';
import './App.css';
import Login from "./Components/Navbar/Login";
import Map from "./Components/Navbar/Map";
import Profile from "./Components/Navbar/Profile";



class App extends React.Component {

    state = {currentPage: 'login'}

  navigateTo = (page) => {
        this.setState({currentPage: page})
    }

    PAGES = {
        login: <Login navigateTo={this.navigateTo} />,
        map: <Map/>,
        profile: <Profile/>
    }

    render() {
        const { currentPage } = this.state;
        return (
            <div>
                <header>
                    <div className='title'></div>
                    <nav>
                        <ul>
                            <li className='menu'>
                                <button className='text' onClick={() => {
                                    this.navigateTo('login')
                                }}>Login
                                </button>
                            </li>
                            <li className='menu'>
                                <button className='text' onClick={() => {
                                    this.navigateTo('map')
                                }}>Map
                                </button>
                            </li>
                            <li className='menu'>
                                <button className='text' onClick={() => {
                                    this.navigateTo('profile')
                                }}>Profile
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <section>{this.PAGES[currentPage]}</section>
                </main>
            </div>
        );
    }
}

export default App;
