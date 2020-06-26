import React from 'react';
import './App.css';
import Header from "./Components/Header";

class App extends React.Component {

    state = { currentPage: 'home'}

    navigateTo = (page) => {
        this.setState({currentPage: page})
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }

}

export default App;
