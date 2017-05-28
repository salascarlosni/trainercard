import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
import './App.css';

class App extends Component {

    render() {
        return(
            <div>
            <div className="App">
                <div id="title">
                    <h2> Pokémon Card Maker </h2>
                </div>

            </div>

            <GithubCorner
                href="https://github.com/josesalasni"
                bannerColor="#70B7FD"
                octoColor="#fff"
                width={80}
                height={80}
                direction="right"
                />
            </div>
        )
    }
}

export default App;
