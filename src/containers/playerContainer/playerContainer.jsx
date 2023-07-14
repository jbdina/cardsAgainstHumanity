import React, {Component} from 'react';
import {ApiService, GameContainer} from '../index';
import './playerContainer.css';

export default class PlayerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            currentPlayer: null,
            showOverview: false,
            pendingGames: [],
        };
    }


    handlePlayer = async () => {
        const { playerName } = this.state;

        if (!playerName) {
            alert('Please enter your name.');
            return;
        }

        try {
            const playerExists = await ApiService.checkPlayerExists(playerName);

            if (playerExists) {
                const currentPlayer = { name: playerName };
                this.setState({ currentPlayer, showOverview: true });

                const pendingGames = await ApiService.getPendingGames();
                this.setState({ pendingGames });

                // Perform any additional operations after setting the state
                // ...
            } else {
                const newPlayer = await ApiService.createPlayer(playerName);
                const currentPlayer = newPlayer;
                this.setState({ currentPlayer, showOverview: true });

                const pendingGames = await ApiService.getPendingGames();
                this.setState({ pendingGames });

                // Perform any additional operations after setting the state
                // ...
            }
        } catch (error) {
            console.error('Error in handlePlayer:', error);
            alert('Error Occured./handlePlayer');
        }
    };



    handleInputChange = (event) => {
        this.setState({ playerName: event.target.value });
    };

    handleDeletePlayers = () => {
        ApiService.deletePlayersByName('9');
        ApiService.deletePlayersByName('8');
        ApiService.deletePlayersByName('7');
        ApiService.deletePlayersByName('6');
        ApiService.deletePlayersByName('5');
        ApiService.deletePlayersByName('4');
        ApiService.deletePlayersByName('3');
        ApiService.deletePlayersByName('2');
        ApiService.deletePlayersByName('0');
    };
    render() {

        const { playerName, currentPlayer, showOverview, pendingGames } = this.state;

        if (currentPlayer && showOverview) {
            return <GameContainer currentPlayer={currentPlayer}  showOverview={showOverview} pendingGames={pendingGames} />;
        }

        return (

            <div id="player-container">
                <label >
                    Enter your Name :
                    <input type="text" value={playerName} onChange={this.handleInputChange} />
                </label>
                <button onClick={this.handlePlayer}>Search Game</button>
            </div>


        );
    }
}
