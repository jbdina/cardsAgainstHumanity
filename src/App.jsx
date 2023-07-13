import React, { Component } from 'react'
import './App.css';
import Overview from "./components/Overview";

export default class App extends Component {
render(){
    return(
        <div>
    <h1> Wir sind bereit für unser Spiel</h1>,
        <Overview/>
        </div>

    )


}
}