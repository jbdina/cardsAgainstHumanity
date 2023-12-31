import React from 'react'
//import GameContainer from './containers/gameContainer/gameContainer';
import Navbar from './navbar';
import Footer from '../containers/footer/Footer';
import Header from '../containers/header/header';
import Questions from "./questions";
import {PlayerContainer, GameContainer} from "../containers/index";

const Overview = () => {

        return(
            <div>
            <Navbar />,
            <Header />,
                <PlayerContainer />,
                <GameContainer />,
                <Questions />,
            <Footer />

        </div>
);
};

export default Overview;