import React, { Component } from 'react';
import ReactGA from 'react-ga';
import GithubCorner from 'react-github-corner';
import './App.css';

class App extends Component {

    componentDidMount () {
        ReactGA.initialize('UA-151573998-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

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
