// import './_main-header.scss' # how we would require in styles to the sheet


import React, { Component } from 'react'
import logo from '../logo.svg'

class MainHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="hello"> Hellew world </p>
            </header>
        )
    }
}

export default MainHeader