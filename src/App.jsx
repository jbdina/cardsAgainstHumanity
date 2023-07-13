import React, { Component } from 'react'
import GameContainer from './containers/gameContainer/gameContainer';
import './App.css';
import {ApiService, PlayerContainer} from "./containers/index";

export default class App extends Component {
render(){
    return(
        <div>
    <h1> Wir sind bereit für unser Spiel</h1>,
        <PlayerContainer />,
        <GameContainer />
        </div>

    )


}
}