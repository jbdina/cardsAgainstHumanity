import React, { Component } from 'react'
import GameContainer from './containers/gameContainer/gameContainer';
import Header from './containers/header/header';
import Footer from './containers/footer/Footer';
import './App.css';

export default class App extends Component {
render(){
    return(
    <h1> Wir sind bereit für unser Spiel</h1>,
    <GameContainer />,
        <Header />,
        <Footer />
    )
}
}