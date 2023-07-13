import React, { Component } from 'react'
import GameContainer from './containers/gameContainer/gameContainer';
import './App.css';
import {PlayerContainer} from "./containers/index";

export default class App extends Component {
render(){
    return(
    <h1> Wir sind bereit für unser Spiel</h1>,
    <GameContainer />,
        <PlayerContainer />
    )
}
}